package es.mycloset.front;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;

import java.io.File;
import java.io.IOException;
import java.util.Map;

public class CloudinaryUploader2 {

    private static final String CLOUD_NAME = "ddfqxbkwo";
    private static final String API_KEY = "759333519186561";
    private static final String API_SECRET = "7_up5KzhwERgduTows8au3T4wPM";

    private final Cloudinary cloudinary;

    public CloudinaryUploader2() {
        this.cloudinary = new Cloudinary(ObjectUtils.asMap(
                "cloud_name", CLOUD_NAME,
                "api_key", API_KEY,
                "api_secret", API_SECRET));
    }

    public String uploadImage(String imageFile) throws IOException {
        File imageFile2 = new File(imageFile);
        Map<String, Object> uploadResult = cloudinary.uploader().upload(imageFile2, ObjectUtils.emptyMap());
        return (String) uploadResult.get("secure_url");
    }
}

