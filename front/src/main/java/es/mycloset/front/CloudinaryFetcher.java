package es.mycloset.front;

import com.cloudinary.Cloudinary;

import java.io.FileOutputStream;
import java.io.IOException;
import java.net.URL;
import java.nio.channels.Channels;
import java.nio.channels.ReadableByteChannel;

public class CloudinaryFetcher {

    private static final String CLOUD_NAME = "ddfqxbkwo";
    private static final String API_KEY = "759333519186561";
    private static final String API_SECRET = "7_up5KzhwERgduTows8au3T4wPM";

    public static void main(String[] args) throws IOException {
        Cloudinary cloudinary = new Cloudinary("cloudinary://" + API_KEY + ":" + API_SECRET + "@" + CLOUD_NAME);

        // Replace "image_id" with the actual ID of the image you want to fetch
        String imageUrl = cloudinary.url().generate("e1k5qm4fcrjyeup5jll4");

        // Fetch the image from the URL
        // Fetch the image from the URL and save it to a file
        URL url = new URL(imageUrl);
        ReadableByteChannel channel = Channels.newChannel(url.openStream());
        FileOutputStream fileOutputStream = new FileOutputStream("image.jpg");
        fileOutputStream.getChannel().transferFrom(channel, 0, Long.MAX_VALUE);
        fileOutputStream.close();
    }
}
