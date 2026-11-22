"""Draws the Switchboard building for the village map (static/img/village/switchboard.png).

The exchange: a six-sided tower with a tented violet roof, a sunset dial window, a lantern
room and a telegraph mast. The map strings its wires from the mast (see MAST below and
`wires` in VillageMap.svelte). Run:  python3 tools/switchboard_sprite.py
"""
from pathlib import Path

from PIL import Image, ImageDraw

W, H = 80, 120
INK = (44, 36, 48, 255)
WALL, WALL_SHADE, WALL_DARK, WALL_LINE = (246, 233, 210, 255), (222, 205, 176, 255), (195, 180, 155, 255), (216, 205, 185, 255)
STONE, STONE_D, STONE_L = (170, 166, 158, 255), (126, 122, 118, 255), (206, 201, 193, 255)
V_DARK, V_BASE, V_MID, V_LIGHT, V_HI = (30, 18, 54, 255), (42, 26, 71, 255), (58, 40, 102, 255), (84, 64, 140, 255), (116, 96, 176, 255)
PINK, ROSE, ORANGE, GLOW = (255, 79, 139, 255), (212, 20, 90, 255), (255, 154, 60, 255), (255, 210, 122, 255)
WOOD, WOOD_D = (92, 66, 46, 255), (81, 58, 40, 255)
DIRT, DIRT_D, DIRT_L = (206, 170, 114, 255), (186, 148, 96, 255), (222, 190, 136, 255)
MINT = (143, 224, 183, 255)

# Where the wires leave, in sprite pixels: the ends of the mast's two crossarms.
MAST = {'top_left': (24, 7), 'top_right': (40, 7), 'low_left': (26, 13), 'low_right': (38, 13)}

img = Image.new('RGBA', (W, H), (0, 0, 0, 0))
d = ImageDraw.Draw(img)
px = img.putpixel


def poly(points, fill, outline=INK):
    d.polygon(points, fill=fill, outline=outline)


# ---- ground: a packed-earth pad, so the tower sits on something
pad = [(2, 101), (32, 116), (62, 101), (32, 86)]
poly(pad, DIRT, DIRT_D)
for x, y in [(12, 101), (20, 106), (44, 107), (52, 102), (30, 111), (38, 104), (24, 98)]:
    px((x, y), DIRT_L)
for x, y in [(16, 104), (48, 104), (34, 113), (27, 108)]:
    px((x, y), DIRT_D)

# ---- walls: three faces of a six-sided tower
L0, FL0, FR0, R0 = (11, 95), (22, 101), (43, 101), (54, 95)
L1, FL1, FR1, R1 = (11, 53), (22, 59), (43, 59), (54, 53)
poly([L0, FL0, FL1, L1], WALL_DARK)
poly([FL0, FR0, FR1, FL1], WALL)
poly([FR0, R0, R1, FR1], WALL_SHADE)
for y in range(63, 97, 4):                       # courses of brick, a touch darker
    d.line([(23, y), (42, y)], fill=WALL_LINE)
    d.line([(12, y - 5), (21, y)], fill=(180, 165, 141, 255))
    d.line([(44, y), (53, y - 5)], fill=(206, 190, 162, 255))
# stone plinth
poly([(11, 91), (22, 97), (22, 101), (11, 95)], STONE_D)
poly([(22, 97), (43, 97), (43, 101), (22, 101)], STONE)
poly([(43, 97), (54, 91), (54, 95), (43, 101)], STONE_D)
d.line([(23, 98), (42, 98)], fill=STONE_L)
for x in (27, 33, 39):
    px((x, 99), STONE_D), px((x, 100), STONE_D)

# ---- door with a step
poly([(27, 104), (38, 104), (40, 106), (25, 106)], STONE_L)
d.rectangle([28, 87, 37, 101], fill=V_BASE, outline=INK)
d.line([(29, 86), (36, 86)], fill=INK), d.line([(30, 85), (35, 85)], fill=INK)
d.line([(30, 86), (35, 86)], fill=V_BASE)
d.line([(32, 88), (32, 100)], fill=V_DARK), d.line([(33, 88), (33, 100)], fill=V_MID)
px((35, 95), PINK)
d.rectangle([29, 102, 36, 103], fill=STONE, outline=None)
d.line([(28, 104), (37, 104)], fill=STONE_D)

# ---- the dial: a round window with the sun going down behind bars
cx, cy = 32, 71
d.ellipse([cx - 8, cy - 8, cx + 9, cy + 9], fill=INK)
d.ellipse([cx - 7, cy - 7, cx + 8, cy + 8], fill=V_BASE)
d.ellipse([cx - 6, cy - 6, cx + 7, cy + 7], fill=ORANGE)
for y in range(cy - 6, cy + 8):
    t = (y - (cy - 6)) / 13
    row = tuple(int(ORANGE[i] + (PINK[i] - ORANGE[i]) * min(1, t * 1.5)) for i in range(3)) + (255,)
    for x in range(cx - 6, cx + 8):
        if img.getpixel((x, y)) == ORANGE:
            px((x, y), row)
for y in (cy + 1, cy + 3, cy + 5):               # the bars across the lower half
    for x in range(cx - 6, cx + 8):
        if img.getpixel((x, y))[:3] not in (V_BASE[:3], INK[:3]):
            px((x, y), V_BASE)
# a row of line lamps under it
for i, color in enumerate([PINK, GLOW, MINT, GLOW, PINK]):
    px((25 + i * 4, 82), color), px((26 + i * 4, 82), color)
    px((25 + i * 4, 83), INK), px((26 + i * 4, 83), INK)

# ---- side windows, lit
def side_window(x, y, slope, glow):
    for i in range(5):
        top = y + int(round(i * slope))
        d.line([(x + i, top), (x + i, top + 10)], fill=INK if i in (0, 4) else glow)
    for i in range(5):
        top = y + int(round(i * slope))
        px((x + i, top), INK), px((x + i, top + 10), INK), px((x + i, top + 5), INK)
side_window(14, 63, 0.5, GLOW)
side_window(47, 65, -0.5, (255, 226, 160, 255))
side_window(14, 79, 0.5, (240, 190, 110, 255))
side_window(47, 81, -0.5, GLOW)

# ---- roof: three facets of a tent, shingled
EL, EFL, EFR, ER = (6, 52), (20, 61), (45, 61), (59, 52)
TL, TR = (28, 30), (37, 30)
poly([EL, EFL, TL], V_BASE)
poly([EFL, EFR, TR, TL], V_MID)
poly([EFR, ER, TR], V_DARK)


def inside(point, tri):
    x, y = point
    sign = None
    for i in range(len(tri)):
        (x1, y1), (x2, y2) = tri[i], tri[(i + 1) % len(tri)]
        cross = (x2 - x1) * (y - y1) - (y2 - y1) * (x - x1)
        if cross != 0:
            if sign is None:
                sign = cross > 0
            elif (cross > 0) != sign:
                return False
    return True


front = [EFL, EFR, TR, TL]
for row, y in enumerate(range(34, 61, 4)):       # rows of shingles on the front facet
    for x in range(18, 48):
        if inside((x, y), front) and img.getpixel((x, y)) == V_MID:
            px((x, y), V_BASE)
    for x in range(18 + (row % 2) * 2, 48, 4):
        for yy in (y + 1, y + 2):
            if inside((x, yy), front) and img.getpixel((x, yy)) == V_MID:
                px((x, yy), V_BASE)
    for x in range(18, 48):
        if inside((x, y + 1), front) and img.getpixel((x, y + 1)) == V_MID and (x + row) % 4 == 1:
            px((x, y + 1), V_LIGHT)
left = [EL, EFL, TL]
for row, off in enumerate(range(0, 30, 4)):
    for x in range(6, 29):
        y = int(52 + (x - 6) * 9 / 14) - off
        if inside((x, y), left) and img.getpixel((x, y)) == V_BASE:
            px((x, y), V_DARK)
right = [EFR, ER, TR]
for row, off in enumerate(range(0, 30, 4)):
    for x in range(37, 60):
        y = int(61 - (x - 45) * 9 / 14) - off
        if inside((x, y), right) and img.getpixel((x, y)) == V_DARK:
            px((x, y), (22, 12, 42, 255))
# ridges catch the light, and a pink line runs along the eave like a neon tube
d.line([EFL, TL], fill=V_HI), d.line([EFR, TR], fill=V_LIGHT)
d.line([(EL[0] + 1, EL[1] + 1), (EFL[0], EFL[1] + 1)], fill=ROSE)
d.line([(EFL[0], EFL[1] + 1), (EFR[0], EFR[1] + 1)], fill=PINK)
d.line([(EFR[0], EFR[1] + 1), (ER[0] - 1, ER[1] + 1)], fill=ROSE)
d.line([(EL[0], EL[1] + 2), (EFL[0], EFL[1] + 2)], fill=INK)
d.line([(EFL[0], EFL[1] + 2), (EFR[0], EFR[1] + 2)], fill=INK)
d.line([(EFR[0], EFR[1] + 2), (ER[0], ER[1] + 2)], fill=INK)

# ---- lantern room: where the operator sits, glowing
d.rectangle([27, 22, 38, 31], fill=V_BASE, outline=INK)
d.rectangle([29, 24, 31, 29], fill=PINK), d.rectangle([34, 24, 36, 29], fill=ORANGE)
px((30, 24), (255, 170, 200, 255)), px((35, 24), (255, 200, 130, 255))
poly([(25, 22), (40, 22), (36, 17), (29, 17)], V_MID)
d.line([(26, 21), (39, 21)], fill=V_LIGHT)
d.line([(29, 17), (36, 17)], fill=INK)

# ---- telegraph mast with two crossarms and porcelain insulators
d.rectangle([32, 3, 33, 17], fill=WOOD, outline=None)
d.line([(31, 3), (31, 17)], fill=INK), d.line([(34, 3), (34, 17)], fill=INK)
d.line([(32, 2), (33, 2)], fill=INK)
for y, x0, x1 in ((8, 23, 42), (14, 25, 40)):
    d.rectangle([x0, y, x1, y + 1], fill=WOOD_D, outline=None)
    d.line([(x0, y - 1), (x1, y - 1)], fill=INK), d.line([(x0, y + 2), (x1, y + 2)], fill=INK)
    px((x0 - 1, y), INK), px((x0 - 1, y + 1), INK), px((x1 + 1, y), INK), px((x1 + 1, y + 1), INK)
    for x in (x0 + 1, x0 + 5, x1 - 5, x1 - 1):
        px((x, y - 1), (240, 238, 232, 255)), px((x, y - 2), PINK if x in (x0 + 1, x1 - 1) else (240, 238, 232, 255))
        px((x, y - 3), INK)
px((32, 1), PINK), px((33, 1), PINK), px((32, 0), INK), px((33, 0), INK)

# ---- the hanging sign, like the other open buildings have
d.rectangle([69, 70, 70, 104], fill=WOOD, outline=None)
d.line([(68, 70), (68, 104)], fill=INK), d.line([(71, 70), (71, 104)], fill=INK)
d.line([(68, 105), (71, 105)], fill=INK)
d.rectangle([58, 70, 71, 71], fill=WOOD_D, outline=None)
d.line([(57, 69), (71, 69)], fill=INK), d.line([(57, 72), (67, 72)], fill=INK), px((57, 70), INK), px((57, 71), INK)
px((60, 73), INK), px((65, 73), INK)
d.rectangle([56, 74, 69, 87], fill=(255, 246, 220, 255), outline=INK)
d.rectangle([58, 76, 67, 85], fill=PINK)
for x, y in [(60, 78), (61, 78), (60, 79), (61, 79), (64, 82), (65, 82), (64, 83), (65, 83)]:
    px((x, y), V_DARK)
for x, y in [(62, 79), (62, 80), (63, 81), (63, 82)]:
    px((x, y), V_DARK)

out = Path(__file__).resolve().parent.parent / 'static' / 'img' / 'village' / 'switchboard.png'
img.save(out)
print(out, img.size, 'mast', MAST)
