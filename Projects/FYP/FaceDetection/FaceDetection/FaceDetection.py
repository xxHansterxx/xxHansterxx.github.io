import numpy as np

def detect_faces_simple(image):
    # Convert to grayscale if needed
    if len(image.shape) == 3:
        gray = np.mean(image, axis=2)

    # Normalize
    gray = gray / 255.0

    h, w = gray.shape

    faces = []

    # Slide a window across the image
    window_size = 60

    for y in range(0, h - window_size, 20):
        for x in range(0, w - window_size, 20):
            window = gray[y:y+window_size, x:x+window_size]

            # Very rough heuristic:
            # Faces tend to have medium brightness + variation
            mean = np.mean(window)
            std = np.std(window)

            if 0.3 < mean < 0.7 and std > 0.05:
                faces.append([x, y, window_size, window_size])

    return faces