import os
import re

folder = r"D:\Project\neel-infra-tech\public\images\gallery"   # change this to your folder path

files = [f for f in os.listdir(folder) if f.lower().endswith(".jpg")]

# Sort files based on the number in filename
files.sort(key=lambda x: int(re.search(r'\d+', x).group()))

for i, file in enumerate(files, start=1):
    new_name = f"img{i}.jpg"
    old_path = os.path.join(folder, file)
    new_path = os.path.join(folder, new_name)

    os.rename(old_path, new_path)

print("Renaming completed!")