package es.mycloset.front;

import com.google.gson.FieldNamingPolicy;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.reflect.TypeToken;
import java.io.IOException;
import java.io.Serializable;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.ArrayList;

public class DataService implements Serializable {


    private final Gson gson = new GsonBuilder()
            .setPrettyPrinting()
            .setFieldNamingPolicy(FieldNamingPolicy.LOWER_CASE_WITH_UNDERSCORES)
            .create();
    HttpRequest request;
    HttpClient client = HttpClient.newBuilder().build();
    HttpResponse<String> response;

    /**
     * Clase empleada para realizar la petición GET a la api para leer las prendas almacenadas por el usuario.
     *
     * @return lista de instancias Prendas leídas de la base de datos.
     */
    public static ArrayList<Prenda> getPrendas(String userId) {
        HttpRequest request;
        HttpResponse<String> response;
        Gson gson = new Gson();
        String api = "http://api:8887/prendas/" + userId;

        try {
            request = HttpRequest.newBuilder()
                    .uri(new URI(api))
                    .GET()
                    .build();
        } catch (URISyntaxException e) {
            throw new RuntimeException(e);
        }

        try {
            response = HttpClient.newBuilder().build().send(request, HttpResponse.BodyHandlers.ofString());
        } catch (IOException | InterruptedException e) {
            throw new RuntimeException(e);
        }

        return gson.fromJson(response.body(), new TypeToken<ArrayList<Prenda>>() {
        }.getType());
    }

    public static ArrayList<Outfit> getOutfits(String userId) {
        HttpRequest request;
        HttpResponse<String> response;
        Gson gson = new Gson();
        String api = "http://api:8887/outfit/" + userId;

        try {
            request = HttpRequest.newBuilder()
                    .uri(new URI(api))
                    .GET()
                    .build();
        } catch (URISyntaxException e) {
            throw new RuntimeException(e);
        }

        try {
            response = HttpClient.newBuilder().build().send(request, HttpResponse.BodyHandlers.ofString());
        } catch (IOException | InterruptedException e) {
            throw new RuntimeException(e);
        }

        return gson.fromJson(response.body(), new TypeToken<ArrayList<Outfit>>() {
        }.getType());
    }

    public static ArrayList<Prenda> getPrendasdona(String userId) {
        HttpRequest request;
        HttpResponse<String> response;
        Gson gson = new Gson();
        String api = "http://api:8887/dona/" + userId;

        try {
            request = HttpRequest.newBuilder()
                    .uri(new URI(api))
                    .GET()
                    .build();
        } catch (URISyntaxException e) {
            throw new RuntimeException(e);
        }

        try {
            response = HttpClient.newBuilder().build().send(request, HttpResponse.BodyHandlers.ofString());
        } catch (IOException | InterruptedException e) {
            throw new RuntimeException(e);
        }

        return gson.fromJson(response.body(), new TypeToken<ArrayList<Prenda>>() {
        }.getType());
    }

    public static ArrayList<Prenda> getPrendasarch(String userId) {
        HttpRequest request;
        HttpResponse<String> response;
        Gson gson = new Gson();
        String api = "http://api:8887/arch/" + userId;

        try {
            request = HttpRequest.newBuilder()
                    .uri(new URI(api))
                    .GET()
                    .build();
        } catch (URISyntaxException e) {
            throw new RuntimeException(e);
        }

        try {
            response = HttpClient.newBuilder().build().send(request, HttpResponse.BodyHandlers.ofString());
        } catch (IOException | InterruptedException e) {
            throw new RuntimeException(e);
        }

        return gson.fromJson(response.body(), new TypeToken<ArrayList<Prenda>>() {
        }.getType());
    }

    static public ArrayList<Prenda> añadirPrenda(Prenda prenda) {
        HttpRequest request;
        HttpResponse<String> response = null;
        Gson gson = new Gson();
        HttpClient client = HttpClient.newBuilder().build();

        try {
            request = HttpRequest.newBuilder()
                    .uri(URI.create("http://api:8887/nueva_prenda/" + prenda.getPre_id()))
                    .header("Content-Type", "application/json")
                    .method("PUT", HttpRequest.BodyPublishers.ofString(gson.toJson(prenda)))
                    .build();
            response = client.send(request, HttpResponse.BodyHandlers.ofString());
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }
        return gson.fromJson(response.body(), new TypeToken<ArrayList<Prenda>>() {
        }.getType());
    }
    static public Outfit añadirOutfit(Outfit outfit) {
        HttpRequest request;
        HttpResponse<String> response = null;
        Gson gson = new Gson();
        HttpClient client = HttpClient.newBuilder().build();

        try {
            request = HttpRequest.newBuilder()
                    .uri(URI.create("http://api:8887/nuevo_outfit/" + outfit.getOut_id()))
                    .header("Content-Type", "application/json")
                    .method("PUT", HttpRequest.BodyPublishers.ofString(gson.toJson(outfit)))
                    .build();
            response = client.send(request, HttpResponse.BodyHandlers.ofString());
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }
        return gson.fromJson(response.body(), new TypeToken<Outfit>() {
        }.getType());
    }

    static public ArrayList<Prenda> updatePrenda(Prenda prenda) {
        HttpRequest request;
        HttpResponse<String> response = null;
        Gson gson = new Gson();
        HttpClient client = HttpClient.newBuilder().build();

        try {
            request = HttpRequest.newBuilder()
                    .uri(URI.create("http://api:8887/updt_prenda/" + prenda.getPre_id()))
                    .header("Content-Type", "application/json")
                    .method("PUT", HttpRequest.BodyPublishers.ofString(gson.toJson(prenda)))
                    .build();
            response = client.send(request, HttpResponse.BodyHandlers.ofString());
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }
        return gson.fromJson(response.body(), new TypeToken<ArrayList<Prenda>>() {
        }.getType());
    }

    static public ArrayList<Outfit> updateOutfit(Outfit outfit) {
        HttpRequest request;
        HttpResponse<String> response = null;
        Gson gson = new Gson();
        HttpClient client = HttpClient.newBuilder().build();

        try {
            request = HttpRequest.newBuilder()
                    .uri(URI.create("http://api:8887/updt_outfit/" + outfit.getOut_id()))
                    .header("Content-Type", "application/json")
                    .method("PUT", HttpRequest.BodyPublishers.ofString(gson.toJson(outfit)))
                    .build();
            response = client.send(request, HttpResponse.BodyHandlers.ofString());
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }
        return gson.fromJson(response.body(), new TypeToken<ArrayList<Outfit>>() {
        }.getType());
    }
    static public void updateOutPre(int out_id, int pre_id) {
        HttpRequest request;
        HttpResponse<String> response = null;
        Gson gson = new Gson();
        HttpClient client = HttpClient.newBuilder().build();

        try {
            request = HttpRequest.newBuilder()
                    .uri(URI.create("http://api:8887/updt_outpre/" + out_id+"/"+pre_id))
                    .header("Content-Type", "application/json")
                    .method("PUT", HttpRequest.BodyPublishers.ofString("k"))
                    .build();
            response = client.send(request, HttpResponse.BodyHandlers.ofString());
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }
    }
    static ArrayList<Prenda> archivarPrenda(Prenda prenda) {
        HttpRequest request;
        HttpResponse<String> response = null;
        Gson gson = new Gson();
        HttpClient client = HttpClient.newBuilder().build();

        try {
            request = HttpRequest.newBuilder()
                    .uri(URI.create("http://api:8887/archivo/" + prenda.getPre_id()))
                    .header("Content-Type", "application/json")
                    .method("PUT", HttpRequest.BodyPublishers.ofString(gson.toJson(prenda)))
                    .build();
            response = client.send(request, HttpResponse.BodyHandlers.ofString());
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }
        return gson.fromJson(response.body(), new TypeToken<ArrayList<Prenda>>() {
        }.getType());
    }
    static ArrayList<Prenda> donarPrenda(Prenda prenda) {
        HttpRequest request;
        HttpResponse<String> response = null;
        Gson gson = new Gson();
        HttpClient client = HttpClient.newBuilder().build();

        try {
            request = HttpRequest.newBuilder()
                    .uri(URI.create("http://api:8887/donacion/" + prenda.getPre_id()))
                    .header("Content-Type", "application/json")
                    .method("PUT", HttpRequest.BodyPublishers.ofString(gson.toJson(prenda)))
                    .build();
            response = client.send(request, HttpResponse.BodyHandlers.ofString());
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }
        return gson.fromJson(response.body(), new TypeToken<ArrayList<Prenda>>() {
        }.getType());
    }
    static ArrayList<Prenda> desmarcar(Prenda prenda) {
        HttpRequest request;
        HttpResponse<String> response = null;
        Gson gson = new Gson();
        HttpClient client = HttpClient.newBuilder().build();

        try {
            request = HttpRequest.newBuilder()
                    .uri(URI.create("http://api:8887/desmarcar/" + prenda.getPre_id()))
                    .header("Content-Type", "application/json")
                    .method("PUT", HttpRequest.BodyPublishers.ofString(gson.toJson(prenda)))
                    .build();
            response = client.send(request, HttpResponse.BodyHandlers.ofString());
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }
        return gson.fromJson(response.body(), new TypeToken<ArrayList<Prenda>>() {
        }.getType());
    }

    static ArrayList<Prenda> eliminarPrenda(Prenda prenda) {
        HttpRequest request;
        HttpResponse<String> response = null;
        Gson gson = new Gson();
        HttpClient client = HttpClient.newBuilder().build();

        try {
            request = HttpRequest.newBuilder()
                    .uri(URI.create("http://api:8887/elim_prenda/" + prenda.getPre_id()))
                    .header("Content-Type", "application/json")
                    .method("PUT", HttpRequest.BodyPublishers.ofString(gson.toJson(prenda)))
                    .build();
            response = client.send(request, HttpResponse.BodyHandlers.ofString());
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }
        return gson.fromJson(response.body(), new TypeToken<ArrayList<Prenda>>() {
        }.getType());
    }
    static ArrayList<Outfit> eliminarOutfit(Outfit outfit) {
        HttpRequest request;
        HttpResponse<String> response = null;
        Gson gson = new Gson();
        HttpClient client = HttpClient.newBuilder().build();
        try {
            request = HttpRequest.newBuilder()
                    .uri(URI.create("http://api:8887/elim_prenda/" + outfit.getOut_id()))
                    .header("Content-Type", "application/json")
                    .method("PUT", HttpRequest.BodyPublishers.ofString(gson.toJson(outfit)))
                    .build();
            response = client.send(request, HttpResponse.BodyHandlers.ofString());
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }
        return gson.fromJson(response.body(), new TypeToken<ArrayList<Outfit>>() {
        }.getType());
    }

    static ArrayList<Outfit> getReco(String user_id, int temp) {
        HttpRequest request;
        HttpResponse<String> response = null;
        Gson gson = new Gson();
        HttpClient client = HttpClient.newBuilder().build();
        try {
            request = HttpRequest.newBuilder()
                    .uri(URI.create("http://api:8887/reco/" + user_id + "/" + temp))
                    .header("Content-Type", "application/json")
                    .GET()
                    .build();
            response = client.send(request, HttpResponse.BodyHandlers.ofString());
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }
        return gson.fromJson(response.body(), new TypeToken<ArrayList<Outfit>>() {
        }.getType());
    }
}