package es.mycloset.front;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;

import java.io.File;
import java.io.IOException;
import java.util.Map;

public class CloudinaryUploader {

    private static final String CLOUD_NAME = "ddfqxbkwo";
    private static final String API_KEY = "759333519186561";
    private static final String API_SECRET = "7_up5KzhwERgduTows8au3T4wPM";

    public static void main(String[] args) throws IOException {
        Cloudinary cloudinary = new Cloudinary(ObjectUtils.asMap(
                "cloud_name", CLOUD_NAME,
                "api_key", API_KEY,
                "api_secret", API_SECRET));

        // Replace "image_path" with the actual path of your image file
        File imageFile = new File("C:\\Users\\guill\\OneDrive\\Escritorio\\trytfg\\1f3c2b59-cf1b-42ad-aab4-987f2e822fd5.jfif");

        // Upload the image to Cloudinary
        Map<String, Object> uploadResult = cloudinary.uploader().upload(imageFile, ObjectUtils.emptyMap());

        // Print the URL of the uploaded image
        System.out.println(uploadResult.get("secure_url"));
    }
}
