from PIL import Image, ImageDraw, ImageFont
import os

# Brand colors from tailwind.config.js
NAVY = '#020617'
NAVY_LIGHT = '#0B1221'
CYAN = '#64FFDA'
WHITE = '#F8FAFC'
MUTED = '#64748B'

WIDTH = 1200
HEIGHT = 630

# Page-specific OG images
PAGES = [
    {'filename': 'og-home.png', 'title': 'AI Receptionist for Service Businesses', 'subtitle': 'Never miss a lead. Never stop booking.'},
    {'filename': 'og-ai.png', 'title': 'AI Agent', 'subtitle': 'Automated lead qualification & booking in 6 languages'},
    {'filename': 'og-talent.png', 'title': 'Managed Teams', 'subtitle': 'Customer support & sales teams from $10/hour'},
    {'filename': 'og-studio.png', 'title': 'Software Studio', 'subtitle': 'Custom development built from scratch'},
    {'filename': 'og-security.png', 'title': 'Security & Compliance', 'subtitle': 'SOC 2 Type II, GDPR, and data privacy'},
]


def quadratic_bezier(p0: tuple, p1: tuple, p2: tuple, steps: int = 50) -> list:
    """Generate points along a quadratic Bezier curve."""
    points = []
    for i in range(steps + 1):
        t = i / steps
        x = (1 - t) ** 2 * p0[0] + 2 * (1 - t) * t * p1[0] + t ** 2 * p2[0]
        y = (1 - t) ** 2 * p0[1] + 2 * (1 - t) * t * p1[1] + t ** 2 * p2[1]
        points.append((x, y))
    return points


def draw_line(draw: ImageDraw.ImageDraw, p1: tuple, p2: tuple, fill: str, width: int):
    """Draw a line with rounded caps."""
    draw.line([p1, p2], fill=fill, width=width)
    r = width // 2
    draw.ellipse([p1[0] - r, p1[1] - r, p1[0] + r, p1[1] + r], fill=fill)
    draw.ellipse([p2[0] - r, p2[1] - r, p2[0] + r, p2[1] + r], fill=fill)


def draw_logo_icon(draw: ImageDraw.ImageDraw, cx: int, cy: int, size: int):
    """Draw the Horus Desk eye logo icon centered at (cx, cy) with the given size."""
    scale = size / 200.0

    def sx(x: float) -> float:
        return cx + (x - 100) * scale

    def sy(y: float) -> float:
        return cy + (y - 100) * scale

    def sw(width: float) -> int:
        return max(1, int(width * scale))

    # Main eye outline: M20 100 Q100 40 180 100 Q100 160 20 100
    outline = (
        quadratic_bezier((sx(20), sy(100)), (sx(100), sy(40)), (sx(180), sy(100)), 60) +
        quadratic_bezier((sx(180), sy(100)), (sx(100), sy(160)), (sx(20), sy(100)), 60)
    )
    draw.line(outline, fill=CYAN, width=sw(4), joint='curve')

    # Upper eyelid: M30 70 Q100 30 170 70
    eyebrow = quadratic_bezier((sx(30), sy(70)), (sx(100), sy(30)), (sx(170), sy(70)), 50)
    draw.line(eyebrow, fill=CYAN, width=sw(4), joint='curve')

    # Outer iris circle: cx=100 cy=100 r=28
    r1 = sw(28)
    draw.ellipse(
        [cx - r1, cy - r1, cx + r1, cy + r1],
        outline=CYAN,
        width=sw(3),
    )

    # Inner pupil circle: cx=100 cy=100 r=12
    r2 = sw(12)
    draw.ellipse(
        [cx - r2, cy - r2, cx + r2, cy + r2],
        fill=CYAN,
    )

    # Decorative left rays
    lw = sw(2.5)
    draw_line(draw, (sx(25), sy(100)), (sx(8), sy(85)), CYAN, lw)
    draw_line(draw, (sx(25), sy(100)), (sx(8), sy(100)), CYAN, lw)
    draw_line(draw, (sx(25), sy(100)), (sx(8), sy(115)), CYAN, lw)

    # Decorative right rays
    draw_line(draw, (sx(175), sy(100)), (sx(192), sy(85)), CYAN, lw)
    draw_line(draw, (sx(175), sy(100)), (sx(192), sy(100)), CYAN, lw)
    draw_line(draw, (sx(175), sy(100)), (sx(192), sy(115)), CYAN, lw)

    # Decorative bottom rays
    draw_line(draw, (sx(100), sy(128)), (sx(100), sy(155)), CYAN, lw)
    draw_line(draw, (sx(82), sy(145)), (sx(118), sy(145)), CYAN, lw)

    # Decorative spiral: M162 100 Q178 100 178 117 Q178 134 162 134 Q150 134 150 122
    spiral = (
        quadratic_bezier((sx(162), sy(100)), (sx(178), sy(100)), (sx(178), sy(117)), 25) +
        quadratic_bezier((sx(178), sy(117)), (sx(178), sy(134)), (sx(162), sy(134)), 25) +
        quadratic_bezier((sx(162), sy(134)), (sx(150), sy(134)), (sx(150), sy(122)), 25)
    )
    draw.line(spiral, fill=CYAN, width=lw, joint='curve')


def draw_clean_background(draw: ImageDraw.ImageDraw, width: int, height: int):
    """Draw a clean subtle vertical gradient."""
    for y in range(height):
        ratio = y / height
        r = int(2 + (11 - 2) * ratio)
        g = int(6 + (18 - 6) * ratio)
        b = int(23 + (33 - 23) * ratio)
        draw.line([(0, y), (width, y)], fill=(r, g, b))


def get_font(name: str, size: int):
    """Load a TrueType font, falling back to default if not found."""
    try:
        return ImageFont.truetype(name, size)
    except OSError:
        return ImageFont.load_default()


def wrap_text(draw: ImageDraw.ImageDraw, text: str, font: ImageFont.FreeTypeFont, max_width: int) -> list:
    """Simple word wrap for a single line of text."""
    words = text.split(' ')
    lines = []
    current = ''
    for word in words:
        test = current + ' ' + word if current else word
        bbox = draw.textbbox((0, 0), test, font=font)
        if bbox[2] - bbox[0] <= max_width:
            current = test
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines if lines else [text]


def create_og_image(page: dict) -> Image.Image:
    """Create a 1200x630 OG image for a page."""
    img = Image.new('RGB', (WIDTH, HEIGHT), NAVY)
    draw = ImageDraw.Draw(img)

    # Clean subtle gradient background
    draw_clean_background(draw, WIDTH, HEIGHT)

    # Fonts
    title_font = get_font('segoeui.ttf', 80)
    subtitle_font = get_font('segoeui.ttf', 34)
    brand_font = get_font('segoeui.ttf', 28)
    url_font = get_font('segoeui.ttf', 22)

    # Logo icon + brand name at top
    icon_size = 56
    brand_text = 'Horus Desk'

    brand_bbox = draw.textbbox((0, 0), brand_text, font=brand_font)
    brand_width = brand_bbox[2] - brand_bbox[0]
    brand_height = brand_bbox[3] - brand_bbox[1]

    gap = 14
    total_width = icon_size + gap + brand_width
    start_x = (WIDTH - total_width) // 2
    top_y = 80

    icon_cx = start_x + icon_size // 2
    icon_cy = top_y + icon_size // 2
    text_y = top_y + (icon_size - brand_height) // 2

    draw_logo_icon(draw, icon_cx, icon_cy, icon_size)
    draw.text((start_x + icon_size + gap, text_y), brand_text, font=brand_font, fill=WHITE)

    # Thin cyan accent line
    line_y = top_y + icon_size + 35
    draw.line([(WIDTH // 2 - 60, line_y), (WIDTH // 2 + 60, line_y)], fill=CYAN, width=2)

    # Page title (wrap if too long)
    title = page['title']
    title_lines = wrap_text(draw, title, title_font, WIDTH - 160)
    title_y = line_y + 60
    line_height = 92

    for line in title_lines:
        bbox = draw.textbbox((0, 0), line, font=title_font)
        line_width = bbox[2] - bbox[0]
        draw.text(((WIDTH - line_width) // 2, title_y), line, font=title_font, fill=WHITE)
        title_y += line_height

    # Subtitle
    subtitle = page['subtitle']
    bbox = draw.textbbox((0, 0), subtitle, font=subtitle_font)
    subtitle_width = bbox[2] - bbox[0]
    subtitle_y = title_y + 30
    draw.text(((WIDTH - subtitle_width) // 2, subtitle_y), subtitle, font=subtitle_font, fill=MUTED)

    # Bottom URL
    url_text = 'horusdesk.com'
    bbox = draw.textbbox((0, 0), url_text, font=url_font)
    url_width = bbox[2] - bbox[0]
    draw.text(((WIDTH - url_width) // 2, HEIGHT - 70), url_text, font=url_font, fill=MUTED)

    return img


def main():
    public_dir = os.path.join(os.path.dirname(__file__), '..', 'public')
    os.makedirs(public_dir, exist_ok=True)

    for page in PAGES:
        img = create_og_image(page)
        output_path = os.path.join(public_dir, page['filename'])
        img.save(output_path, 'PNG', optimize=True)
        print(f'Generated {output_path}')


if __name__ == '__main__':
    main()
