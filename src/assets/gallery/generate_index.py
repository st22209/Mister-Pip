import os

files = []
for idx, i in enumerate(os.listdir("."), start=1):
    if i in ["generate_index.py", "index.ts"]:
        continue
    print(f'import Img{idx} from "./{i}"')
    files.append(f"Img{idx}")

print(f"const GalleryImages = [{', '.join(files)}]")
print("export default GalleryImages;")
