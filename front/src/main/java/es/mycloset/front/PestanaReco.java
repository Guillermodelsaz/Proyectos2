package es.mycloset.front;
import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.button.ButtonVariant;
import com.vaadin.flow.component.dependency.CssImport;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.grid.GridVariant;
import com.vaadin.flow.component.html.Image;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.data.provider.ListDataProvider;
import com.vaadin.flow.component.notification.Notification;

import javax.xml.crypto.Data;
import java.time.LocalDate;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.*;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;

@CssImport("./styles/shared-styles.css")
@CssImport(value = "./styles/vaadin-text-field-styles.css", themeFor = "vaadin-text-field")
public class PestanaReco extends VerticalLayout {
    HorizontalLayout option2gridForm;
    VerticalLayout option2Form;
    VerticalLayout option2Pop;
    ArrayList<Outfit> datosOutfits;
    ListDataProvider<Outfit> dataProvider;
    Grid<Outfit> gridR;
    private double feelsLike;
    User currentUser  = User.getCurrentUser();
    int mesAct  = LocalDate.now().getMonthValue();

    /**
     * Clase empleada para la creación de la vista principal de la aplicación.
     */
    VerticalLayout option2Cont;

    public PestanaReco() {

        option2Cont = new VerticalLayout();
        option2gridForm = new HorizontalLayout();
        option2gridForm.setWidth("100%");
        option2Form = new VerticalLayout();
        option2Pop = new VerticalLayout();

        option2Form.add("addfield");

        Button getWeatherButton = new Button("Recomendar Outfit", event -> {
            Notification.show(String.format("Sensación Térmica: %.2f°C", feelsLike));
            if (feelsLike <= 10){
                datosOutfits = DataService.getReco(currentUser.getUsername(),2);
            }
            if (feelsLike > 10 && feelsLike <= 18 ){
                if (mesAct <= 5){
                    datosOutfits = DataService.getReco(currentUser.getUsername(),4);
                }
                else{
                    datosOutfits = DataService.getReco(currentUser.getUsername(),3);
                }
            }
            if (feelsLike > 18){
                datosOutfits = DataService.getReco(currentUser.getUsername(),1);
            }
            dataProvider = new ListDataProvider<>(datosOutfits);
            gridR.setDataProvider(dataProvider);
        });
        getWeatherButton.addThemeVariants(ButtonVariant.LUMO_PRIMARY);
        getWeatherButton.addClassName("botones");

        this.gridR = this.resultsGrid();
        this.gridR.addClassName("vaadin-grid-no-click");
        option2Cont.add(getWeatherButton);
        option2gridForm.add(gridR);

        this.add(option2Cont, option2gridForm);
    }
    private Grid<Outfit> resultsGrid() {

        double latitude = 40.4391088;
        double longitude = -3.8350075;
        String apiKey = "32604ffa04913f1f0ba91e7f90905d90";
        String apiUrl = String.format("https://api.openweathermap.org/data/2.5/weather?lat=%f&lon=%f&units=metric&appid=%s", latitude, longitude, apiKey);

        try {
            URL url = new URL(apiUrl);
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            connection.setRequestMethod("GET");

            BufferedReader reader = new BufferedReader(new InputStreamReader(connection.getInputStream(), StandardCharsets.UTF_8));

            StringBuilder response = new StringBuilder();
            String line;
            while ((line = reader.readLine()) != null) {
                response.append(line);
            }

            Gson gson = new Gson();
            JsonObject json = gson.fromJson(String.valueOf(response), JsonObject.class);
            JsonObject main = json.getAsJsonObject("main");
            double feelsLike = main.get("feels_like").getAsDouble();
            this.feelsLike = feelsLike;

        } catch (IOException e) {
            Notification.show("Error. Recomendaciones no disponibles");
            e.printStackTrace();
        }

        Grid<Outfit> gridResults = new Grid<>(Outfit.class, false);
        gridResults.setColumnReorderingAllowed(true);
        gridResults.setSelectionMode(Grid.SelectionMode.SINGLE);
        gridResults.addThemeVariants(GridVariant.LUMO_ROW_STRIPES);
        gridResults.addThemeVariants(GridVariant.LUMO_COMPACT);
        gridResults.setAllRowsVisible(true);

        gridResults.addColumn(Outfit::getNombre_outfit).setHeader("Outfit").setKey("outfit");
        gridResults.addColumn(Outfit::getPrendas).setHeader("Prendas").setKey("prendas");
        gridResults.addComponentColumn(ropa -> {
            Image image = new Image(ropa.getImagen_outfit(), ropa.getNombre_outfit());
            image.setWidth("150px");
            image.setHeight("150px");
            return image;
        }).setHeader("Imagen");


        if (feelsLike <= 10){
            datosOutfits = DataService.getReco(currentUser.getUsername(),2);
        }
        if (feelsLike > 10 && feelsLike <= 18 ){
            if (mesAct <= 6){
                datosOutfits = DataService.getReco(currentUser.getUsername(),4);
            }
            else{
                datosOutfits = DataService.getReco(currentUser.getUsername(),3);
            }
        }
        if (feelsLike > 18){
            datosOutfits = DataService.getReco(currentUser.getUsername(),1);
        }
        dataProvider = new ListDataProvider<>(datosOutfits);
        gridResults.setDataProvider(dataProvider);

        return gridResults;
    }
}