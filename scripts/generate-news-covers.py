"""Create original editorial diagrams; no platform screenshots or third-party images.
Requires Pillow. Run from repository root: python scripts/generate-news-covers.py
"""
import json
import math
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
ITEMS = json.loads((ROOT / 'src/content/news-2026-10.json').read_text(encoding='utf-8'))
ITEMS += json.loads((ROOT / 'src/content/geo-guides-2026-10.json').read_text(encoding='utf-8'))
PALETTES = {'ads': '#99dfca', 'geo': '#a9d5f7', 'platforms': '#d4c1f5', 'ecosystem': '#f1cca5'}
FONT_DIR = Path('C:/Windows/Fonts')

def font(size, bold=False):
    name = 'arialbd.ttf' if bold else 'arial.ttf'
    return ImageFont.truetype(str(FONT_DIR / name), size)

def cover(item):
    image = Image.new('RGB', (1200, 630), '#18232b')
    d = ImageDraw.Draw(image)
    accent = PALETTES[item['group']]
    white, muted, surface = '#f4f6f8', '#b6c4ce', '#22333f'
    def text(x, y, value, size=24, color=white, bold=False):
        d.text((x,y),value,font=font(size,bold),fill=color)
    def box(x,y,w,h,outline=accent,fill=surface,r=18):
        d.rounded_rectangle((x,y,x+w,y+h),radius=r,fill=fill,outline=outline,width=2)
    def line(points, color=accent, width=3): d.line(points,fill=color,width=width)
    def dot(x,y,r=9,color=accent): d.ellipse((x-r,y-r,x+r,y+r),fill=color)
    d.rectangle((0,0,11,630),fill=accent)
    text(66,53,'Yapay Zekâda Reklam',25,white,True)
    text(66,102,item['category'],22,accent)
    top, middle, sub = item['cover']['lines']
    text(62,208,top,80 if len(top)<17 else 62,white,True)
    text(66,310,middle,44 if len(middle)<25 else 34,white,True)
    text(66,390,sub,24,muted)
    line([(66,505),(1132,505)],'#455560',1)
    text(66,536,'Uygulama rehberi' if item.get('collection') == 'guide' else 'Haber ve analiz',22,muted)
    text(880,536,item['eventDate'],22,accent)
    n = item['number']
    if item.get('collection') == 'guide':
        n = {1: 6, 2: 14, 3: 18, 4: 20, 5: 13, 6: 14, 7: 5, 8: 4, 9: 6, 10: 2, 11: 5, 12: 19, 13: 14, 14: 20, 15: 21}[item['sourceNumber']]
    if n == 1:
        d.ellipse((770,165,1100,495),outline=accent,width=3)
        d.ellipse((845,165,1025,495),outline=accent,width=2)
        d.ellipse((912,165,958,495),outline=accent,width=2)
        for y in [245,330,415]: line([(787,y),(1082,y)],accent,2)
        for x,y in [(813,250),(986,213),(1060,359),(894,410),(973,300)]: dot(x,y,8)
    elif n == 2:
        box(760,175,345,76);text(790,196,'Konuşma bağlamı',25)
        box(800,305,265,70);text(856,324,'Reklam LLM',24)
        box(840,424,190,60);text(878,440,'Açık artırma',22)
        line([(930,251),(930,305)]);line([(930,375),(930,424)])
    elif n == 3:
        box(765,188,345,280)
        text(790,214,'Kreatif ayarları',27,white,True)
        for y,label in [(280,'Metin'),(342,'Görsel'),(404,'Dil')]:
            text(792,y,label,24);d.rounded_rectangle((1000,y,1080,y+34),radius=17,fill=accent);dot(1058,y+17,12,'#18232b')
    elif n == 4:
        box(760,170,230,268);box(913,250,195,220)
        for x,y,w in [(782,197,181),(933,281,154)]:
            d.rectangle((x,y,x+w,y+110),fill=accent)
            d.polygon([(x,y+110),(x+55,y+38),(x+105,y+110)],fill='#456b70')
            dot(x+w-32,y+25,12,'#f3f5f7')
            line([(x,y+137),(x+w-12,y+137)],muted,5)
    elif n == 5:
        for y,label in [(180,'Tıklama'),(292,'Dönüşüm olayı'),(404,'CRM sonucu')]:
            box(790,y,300,75);dot(820,y+37,7);text(850,y+23,label,24)
            if y<404:line([(940,y+75),(940,y+112)])
    elif n == 6:
        box(765,183,295,170)
        for y in [214,244,274]:line([(791,y),(1032,y)],muted,5)
        line([(791,310),(960,310)],accent,7)
        box(884,385,225,78);text(915,410,'Web kaynağı',24);line([(960,353),(960,385)])
    elif n == 7:
        for i in range(100):
            x,y=782+(i%10)*31,180+(i//10)*29
            d.rounded_rectangle((x,y,x+23,y+21),radius=4,fill=accent if i<88 else '#3c4d5a')
        text(780,478,'Her kutu: 1 yüzde puanı',17,muted)
    elif n == 8:
        text(785,193,'Google organik = 100',24)
        d.rectangle((785,240,1115,280),fill=accent)
        text(785,328,'ChatGPT = 0,62',24)
        d.rectangle((785,375,788,415),fill=accent)
        text(785,450,'Örneklem içi oturum oranı',19,muted)
    elif n == 9:
        box(775,175,330,300)
        for i,color in enumerate([accent,'#8bbdc6','#e6d4b2']):dot(830+i*90,240,30,color)
        text(802,309,'Marka stili',29,white,True)
        for y,w in [(370,250),(407,180),(444,220)]:line([(802,y),(802+w,y)],muted,7)
    elif n == 10:
        box(777,190,333,264)
        text(807,220,'Müşteri görüşleri',25,white,True)
        text(807,275,'★ ★ ★ ★ ★',31,accent)
        for y,w in [(345,250),(380,211),(414,235)]:line([(807,y),(807+w,y)],muted,6)
    elif n == 11:
        d.arc((775,160,1115,500),180,360,fill=accent,width=22)
        line([(944,330),(1048,243)],white,5);dot(944,330,12)
        text(820,366,'%200 → %180',33,white,True)
        text(825,423,'Örnek: %10 tolerans',21,muted)
    elif n == 12:
        d.polygon([(860,190),(814,216),(765,290),(816,326),(851,289),(851,458),(1033,458),(1033,289),(1068,326),(1119,290),(1070,216),(1024,190),(990,217),(895,217)],fill=surface,outline=accent,width=3)
        d.arc((894,170,992,248),0,180,fill=accent,width=3)
        line([(880,381),(1010,381)],muted,4)
    elif n == 13:
        box(775,175,340,300)
        for i,(x,y,w,h) in enumerate([(795,200,140,100),(955,200,140,100),(795,320,300,130)]):
            box(x,y,w,h,outline='#506578',fill='#2d4352',r=9)
        for x,h in [(820,35),(857,57),(894,78)]:d.rectangle((x,288-h,x+20,288),fill=accent)
        for y in [350,385,420]:line([(815,y),(1020,y)],accent,5);dot(1050,y,10)
    elif n in [14,18]:
        cx,cy=940,323
        for i in range(6):
            angle=i*math.pi/3;x=cx+150*math.cos(angle);y=cy+135*math.sin(angle)
            line([(cx,cy),(x,y)]);box(x-30,y-28,60,56,outline=accent,r=12)
        dot(cx,cy,47,accent);text(cx-26,cy-17,'AI' if n==14 else 'İş',29,'#18232b',True)
    elif n == 15:
        for y,label in [(185,'Soru'),(304,'Uygun model'),(423,'İnsan devri')]:
            box(790,y,305,65);text(823,y+18,label,25)
            if y<423:line([(940,y+65),(940,y+119)],accent)
    elif n == 16:
        for x,y,w,label in [(770,180,270,'Daha çok tasarım'),(830,288,280,'Daha az tekrar'),(790,396,260,'İlgilendiğim konu')]:
            box(x,y,w,70);text(x+17,y+23,label,23)
            d.polygon([(x+25,y+70),(x+25,y+85),(x+44,y+70)],fill=accent)
    elif n == 17:
        box(785,188,320,285)
        text(840,220,'TR',86,white,True)
        line([(828,348),(856,376),(913,316)],accent,9)
        text(828,410,'Ülke uygunluğu',24,accent)
    elif n == 19:
        for x in range(780,1120,65): line([(x,185),(x,465)],'#334b5a',2)
        for y in range(185,466,56): line([(780,y),(1110,y)],'#334b5a',2)
        d.ellipse((865,215,1015,365),fill=accent)
        d.polygon([(880,325),(940,438),(1000,325)],fill=accent)
        dot(940,285,28,'#18232b')
    elif n == 20:
        box(775,180,340,300)
        for y in [235,320,405]:
            line([(800,y),(817,y+15),(844,y-15)],accent,5)
            line([(870,y),(1080,y)],muted,6)
    elif n == 21:
        for i in range(4):
            x,y=775+i*80,185+i*38
            box(x,y,65,155)
            text(x+23,y+25,str(i+1),30,accent,True)
            line([(x+15,y+93),(x+50,y+93)],muted,4)
    return image

for item in ITEMS:
    image = cover(item)
    path = ROOT / 'public' / item['cover']['src'].lstrip('/')
    path.parent.mkdir(parents=True, exist_ok=True)
    image.save(path, optimize=True)
    image.save(path.with_suffix('.webp'), quality=88, method=6)
    image.resize((480,252),Image.Resampling.LANCZOS).save(path.with_name(path.stem+'-480.webp'),quality=85,method=6)
print(f'Created {len(ITEMS)} original cover sets (PNG, WebP, thumbnail).')
