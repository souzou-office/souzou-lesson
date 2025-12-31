from PIL import Image
import os

def crop_center(image_path, output_path, crop_height_ratio=0.30):
    try:
        img = Image.open(image_path)
        width, height = img.size
        
        # Calculate new height
        new_height = int(height * crop_height_ratio)
        
        # Calculate coordinates
        left = 0
        top = (height - new_height) // 2
        right = width
        bottom = (height + new_height) // 2
        
        # Crop
        img_cropped = img.crop((left, top, right, bottom))
        
        # Save
        img_cropped.save(output_path)
        print(f"Successfully cropped {image_path} to {output_path}")
    except Exception as e:
        print(f"Error processing {image_path}: {e}")

# Process the About banner
# Using the alt version as it has a lightbulb/book icon which fits "learning" better than a question mark
crop_center("/home/ubuntu/sozou-lp/client/public/about-banner-simple-raw-alt.png", "/home/ubuntu/sozou-lp/client/public/about-banner-simple.png")
