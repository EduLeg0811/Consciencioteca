import os
from pathlib import Path
from PIL import Image

# ==============================
# CONFIGURAÇÕES DO USUÁRIO
# ==============================

# Pasta com as imagens ORIGINAIS
INPUT_DIR = Path(r"C:\Users\Edu\Downloads\files")

# Pasta de saída para as imagens reduzidas
# (será criada automaticamente se não existir)
OUTPUT_DIR = INPUT_DIR / "reduzidas"

# Dimensões máximas (em pixels)
MAX_WIDTH = 1920
MAX_HEIGHT = 1080

# Qualidade do JPG (0 a 100)
JPEG_QUALITY = 80

# Se True, mantém metadados EXIF básicos; se False, descarta
KEEP_EXIF = False


# ==============================
# FUNÇÕES
# ==============================

def ensure_output_dir(path: Path) -> None:
    """Garante que a pasta de saída exista."""
    path.mkdir(parents=True, exist_ok=True)


def is_jpeg(path: Path) -> bool:
    """Verifica se o arquivo é JPG/JPEG pela extensão."""
    return path.suffix.lower() in {".jpg", ".jpeg"}


def resize_image(input_path: Path, output_path: Path) -> None:
    """Reduz a imagem mantendo proporção e salvando como JPG comprimido."""
    try:
        with Image.open(input_path) as img:
            # Converte para RGB, evita problemas com PNG/CMYK/etc.
            img = img.convert("RGB")

            orig_width, orig_height = img.size

            # Calcula fator de escala para caber dentro de MAX_WIDTH x MAX_HEIGHT
            scale_w = MAX_WIDTH / orig_width
            scale_h = MAX_HEIGHT / orig_height
            scale = min(scale_w, scale_h, 1.0)  # nunca aumenta imagem, só diminui

            new_width = int(orig_width * scale)
            new_height = int(orig_height * scale)

            if scale < 1.0:
                img = img.resize((new_width, new_height), Image.LANCZOS)

            save_kwargs = {
                "format": "JPEG",
                "quality": JPEG_QUALITY,
                "optimize": True,
                "progressive": True,
            }

            # Metadados EXIF (opcional)
            if KEEP_EXIF and "exif" in img.info:
                save_kwargs["exif"] = img.info["exif"]

            img.save(output_path, **save_kwargs)

            print(f"[OK] {input_path.name} -> {output_path.name} "
                  f"({orig_width}x{orig_height} -> {new_width}x{new_height})")

    except Exception as e:
        print(f"[ERRO] Ao processar {input_path}: {e}")


def process_folder(input_dir: Path, output_dir: Path) -> None:
    """Percorre a pasta de entrada e reduz todos os JPGs."""
    if not input_dir.exists():
        print(f"Pasta de entrada não encontrada: {input_dir}")
        return

    ensure_output_dir(output_dir)

    files = sorted(p for p in input_dir.iterdir() if p.is_file() and is_jpeg(p))

    if not files:
        print(f"Nenhum arquivo JPG encontrado em: {input_dir}")
        return

    print(f"Encontrados {len(files)} arquivos JPG em {input_dir}")
    print(f"Imagens reduzidas serão salvas em: {output_dir}")
    print("-" * 60)

    for file_path in files:
        output_path = output_dir / file_path.name
        resize_image(file_path, output_path)


# ==============================
# MAIN
# ==============================

if __name__ == "__main__":
    process_folder(INPUT_DIR, OUTPUT_DIR)
    print("\nConcluído.")
