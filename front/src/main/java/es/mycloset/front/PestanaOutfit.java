package es.mycloset.front;
import com.vaadin.flow.component.button.ButtonVariant;
import com.vaadin.flow.component.contextmenu.ContextMenu;
import com.vaadin.flow.component.contextmenu.MenuItem;

import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.checkbox.CheckboxGroup;
import com.vaadin.flow.component.checkbox.CheckboxGroupVariant;
import com.vaadin.flow.component.dependency.CssImport;
import com.vaadin.flow.component.dialog.Dialog;
import com.vaadin.flow.component.formlayout.FormLayout;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.grid.GridVariant;
import com.vaadin.flow.component.grid.HeaderRow;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.html.Image;
import com.vaadin.flow.component.html.Label;
import com.vaadin.flow.component.icon.VaadinIcon;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.select.Select;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.component.upload.Receiver;
import com.vaadin.flow.component.upload.Upload;
import com.vaadin.flow.data.binder.Binder;
import com.vaadin.flow.data.converter.LocalDateTimeToDateConverter;
import com.vaadin.flow.data.converter.StringToFloatConverter;
import com.vaadin.flow.data.converter.StringToIntegerConverter;
import com.vaadin.flow.data.provider.ListDataProvider;
import com.vaadin.flow.data.renderer.TemplateRenderer;
import com.vaadin.flow.data.validator.StringLengthValidator;
import org.apache.commons.lang3.StringUtils;
import com.vaadin.flow.component.checkbox.Checkbox;

import javax.xml.crypto.Data;
import java.io.*;
import java.time.ZoneId;
import java.util.*;

@CssImport("./styles/shared-styles.css")
@CssImport(value = "./styles/vaadin-text-field-styles.css", themeFor = "vaadin-text-field")
public class PestanaOutfit extends VerticalLayout {
    /**
     * Clase empleada para la creación de la vista principal de la aplicación.
     */
    HorizontalLayout option2gridForm;
    VerticalLayout option2Form;
    VerticalLayout option2Pop;
    ArrayList<Outfit> datosOutfits;
    ArrayList<Outfit> datosOutfits2;
    ListDataProvider<Outfit> dataProvider;
    ListDataProvider<Prenda> dataProvider2;
    Grid<Outfit> gridR;
    ArrayList<Prenda> datosPrendas;
    ListDataProvider<Prenda> datosPrenda;
    private List<String> columnasMostradas;
    VerticalLayout option2Cont;

    int valor = 0;
    String url;
    List<Integer> firstColumnValues = new ArrayList<>();
    User currentUser  = User.getCurrentUser();

    private void addGridFilters(Grid<Outfit> grid) {
        HeaderRow filterRow = grid.appendHeaderRow();

        // Outfit filter
        TextField outfitFilter = new TextField();
        outfitFilter.setPlaceholder("Filter");
        outfitFilter.setClearButtonVisible(true);
        outfitFilter.addValueChangeListener(event -> dataProvider.addFilter(
                outfit -> StringUtils.containsIgnoreCase(outfit.getNombre_outfit(), outfitFilter.getValue())));
        filterRow.getCell(grid.getColumnByKey("outfit")).setComponent(outfitFilter);

        // Prendas filter
        TextField prendasFilter = new TextField();
        prendasFilter.setPlaceholder("Filter");
        prendasFilter.setClearButtonVisible(true);
        prendasFilter.addValueChangeListener(event -> dataProvider.addFilter(
                outfit -> outfit.getPrendas().stream().anyMatch(prenda ->
                        StringUtils.containsIgnoreCase(prenda, prendasFilter.getValue()))));
        filterRow.getCell(grid.getColumnByKey("prendas")).setComponent(prendasFilter);
        Checkbox t_verFilter = new Checkbox("Verano");
        t_verFilter.addValueChangeListener(event -> {
            dataProvider.addFilter(outfit -> !t_verFilter.getValue() || outfit.isT_ver());
        });
        filterRow.getCell(grid.getColumnByKey("Verano")).setComponent(t_verFilter);

                Checkbox t_invFilter = new Checkbox("Invierno");
                t_invFilter.addValueChangeListener(event -> {
                    dataProvider.addFilter(outfit -> !t_invFilter.getValue() || outfit.isT_inv());
                });
                filterRow.getCell(grid.getColumnByKey("Invierno")).setComponent(t_invFilter);

                Checkbox t_otoFilter = new Checkbox("Otoño");
                t_otoFilter.addValueChangeListener(event -> {
                    dataProvider.addFilter(outfit -> !t_otoFilter.getValue() || outfit.isT_ver());
                });
                filterRow.getCell(grid.getColumnByKey("Otoño")).setComponent(t_otoFilter);

                Checkbox t_primFilter = new Checkbox("Primavera");
                t_primFilter.addValueChangeListener(event -> {
                    dataProvider.addFilter(outfit -> !t_primFilter.getValue() || outfit.isT_prim());
                });
                filterRow.getCell(grid.getColumnByKey("Primavera")).setComponent(t_primFilter);
    }

    private void addGridFiltersPrenda(Grid<Prenda> grid) {
        HeaderRow filterRow = grid.appendHeaderRow();

        // Filtro nombre de prenda
        TextField nombreFilter = new TextField();
        nombreFilter.setPlaceholder("Filter");
        nombreFilter.setClearButtonVisible(true);
        nombreFilter.addValueChangeListener(event -> datosPrenda.addFilter(
                prenda -> StringUtils.containsIgnoreCase(prenda.getNombre_prenda(), nombreFilter.getValue())));
        filterRow.getCell(grid.getColumnByKey("nombre")).setComponent(nombreFilter);

        // Filtro tipo de prenda
        TextField tipoFilter = new TextField();
        tipoFilter.setPlaceholder("Filter");
        tipoFilter.setClearButtonVisible(true);
        tipoFilter.addValueChangeListener(event -> datosPrenda.addFilter(
                prenda -> StringUtils.containsIgnoreCase(prenda.getTipo(), tipoFilter.getValue())));
        filterRow.getCell(grid.getColumnByKey("tipo")).setComponent(tipoFilter);

        // Filtro color de prenda
        TextField colorFilter = new TextField();
        colorFilter.setPlaceholder("Filter");
        colorFilter.setClearButtonVisible(true);
        colorFilter.addValueChangeListener(event -> datosPrenda.addFilter(
                prenda -> StringUtils.containsIgnoreCase(prenda.getColor(), colorFilter.getValue())));
        filterRow.getCell(grid.getColumnByKey("color")).setComponent(colorFilter);

        // Filtro marca de prenda
        TextField marcaField = new TextField();
        marcaField.setPlaceholder("Filter");
        marcaField.setClearButtonVisible(true);
        marcaField.addValueChangeListener(event -> datosPrenda.addFilter(
                prenda -> StringUtils.containsIgnoreCase(prenda.getMarca(), marcaField.getValue())));
        filterRow.getCell(grid.getColumnByKey("marca")).setComponent(marcaField);

        // Filtro temporada verano
        Checkbox t_verFilter = new Checkbox("Verano");
        t_verFilter.addValueChangeListener(event -> {
            datosPrenda.addFilter(prenda -> !t_verFilter.getValue() || prenda.isT_ver());
        });
        filterRow.getCell(grid.getColumnByKey("Verano")).setComponent(t_verFilter);

        // Filtro temporada invierno
        Checkbox t_invFilter = new Checkbox("Invierno");
        t_invFilter.addValueChangeListener(event -> {
            datosPrenda.addFilter(prenda -> !t_invFilter.getValue() || prenda.isT_inv());
        });
        filterRow.getCell(grid.getColumnByKey("Invierno")).setComponent(t_invFilter);

        // Filtro temporada otoño
        Checkbox t_otoFilter = new Checkbox("Otoño");
        t_otoFilter.addValueChangeListener(event -> {
            datosPrenda.addFilter(prenda -> !t_otoFilter.getValue() || prenda.isT_oto());
        });
        filterRow.getCell(grid.getColumnByKey("Otoño")).setComponent(t_otoFilter);

        // Filtro temporada primavera
        Checkbox t_primFilter = new Checkbox("Primavera");
        t_primFilter.addValueChangeListener(event -> {
            datosPrenda.addFilter(prenda -> !t_primFilter.getValue() || prenda.isT_prim());
        });
        filterRow.getCell(grid.getColumnByKey("Primavera")).setComponent(t_primFilter);
    }
    public PestanaOutfit() {
        option2Cont = new VerticalLayout();
        option2gridForm = new HorizontalLayout();
        option2gridForm.setWidth("100%");
        option2Form = new VerticalLayout();
        option2Pop = new VerticalLayout();
        columnasMostradas = Arrays.asList("outfit", "prendas", "imagen_outfit");

        this.gridR = this.resultsGrid();
        this.gridR.addClassName("vaadin-grid-no-click");

        Button addfield = new Button("Añadir Outfit", VaadinIcon.PLUS.create());

        //MODAL DE AÑADIR Outfit
        addfield.addClickListener(event -> {
            FormLayout formulario =  new FormLayout();
            CheckboxGroup<String> checkboxGroup = new CheckboxGroup<>();
            checkboxGroup.setLabel("Temporada");
            checkboxGroup.setItems("Primavera", "Verano", "Otoño", "Invierno");
            checkboxGroup.addThemeVariants(CheckboxGroupVariant.LUMO_VERTICAL);

            Grid<Prenda> gridResults = new Grid<>(Prenda.class, false);
            gridResults.setColumnReorderingAllowed(true);
            gridResults.setSelectionMode(Grid.SelectionMode.MULTI);
            gridResults.addThemeVariants(GridVariant.LUMO_ROW_STRIPES);
            gridResults.addThemeVariants(GridVariant.LUMO_COMPACT);
            gridResults.setAllRowsVisible(true);

            gridResults.addColumn(Prenda::getNombre_prenda).setHeader("Prenda").setKey("nombre");
            gridResults.addColumn(Prenda::getTipo).setHeader("Tipo").setKey("tipo").setVisible(false);
            gridResults.addColumn(Prenda::getColor).setHeader("Color").setKey("color").setVisible(false);
            gridResults.addColumn(Prenda::getMarca).setHeader("Marca").setKey("marca").setVisible(false);
            gridResults.addColumn(TemplateRenderer.<Prenda>of("[[item.t_ver]]")
                            .withProperty("Verano", Prenda::isT_ver))
                    .setHeader("Verano").setKey("Verano").setVisible(false);
            gridResults.addColumn(TemplateRenderer.<Prenda>of("[[item.t_oto]]")
                            .withProperty("Otoño", Prenda::isT_oto))
                    .setHeader("Otoño").setKey("Otoño").setVisible(false);
            gridResults.addColumn(TemplateRenderer.<Prenda>of("[[item.t_inv]]")
                            .withProperty("Invierno", Prenda::isT_inv))
                    .setHeader("Invierno").setKey("Invierno").setVisible(false);
            gridResults.addColumn(TemplateRenderer.<Prenda>of("[[item.t_prim]]")
                            .withProperty("Primavera", Prenda::isT_prim))
                    .setHeader("Primavera").setKey("Primavera").setVisible(false);

            gridResults.addComponentColumn(ropa -> {
                Image image = new Image(ropa.getImagen_prenda(), ropa.getNombre_prenda());
                image.setWidth("150px");
                image.setHeight("150px");
                return image;
            }).setHeader("Imagen");

            datosPrendas = DataService.getPrendas(currentUser.getUsername());
            dataProvider2 = new ListDataProvider<>(datosPrendas);
            gridResults.setDataProvider(dataProvider2);

            addGridFiltersPrenda(gridResults);
            gridResults.addSelectionListener(selection -> {
                Set<Prenda> selectedItems = selection.getAllSelectedItems();
// Loop through the selected items and retrieve the value of the first column
                if (selectedItems.size() >= 2){
                firstColumnValues = new ArrayList<>();
                for (Prenda selectedItem : selectedItems) {
                    int firstColumnValue = selectedItem.getPre_id();
                    firstColumnValues.add(firstColumnValue);
                }}
                else {
                    Notification.show("Debe seleccionar al menos 2 prendas");
                }
            });

            TextField name = new TextField("Name");
            name.setPlaceholder("Name");
            Upload upload = new Upload();

            // Set the receiver to handle the uploaded file
            upload.setReceiver(new Receiver() {
                @Override
                public OutputStream receiveUpload(String fileName, String mimeType) {
                    // Return a stream to write the uploaded file to
                    try {
                        return new FileOutputStream(new File("img", "1.jpg"));
                    } catch (FileNotFoundException e) {
                        e.printStackTrace();
                        return null;
                    }
                }
            });
            // Set the label of the upload button
            upload.setUploadButton(new Button("Upload", buttonClickEvent -> {
                this.valor = 1;
            }));

            Button filtros2 = new Button("Filtros", e ->{
                gridResults.getColumnByKey("tipo").setVisible(!gridResults.getColumnByKey("tipo").isVisible());
                gridResults.getColumnByKey("marca").setVisible(!gridResults.getColumnByKey("marca").isVisible());
                gridResults.getColumnByKey("color").setVisible(!gridResults.getColumnByKey("color").isVisible());
                gridResults.getColumnByKey("Verano").setVisible(!gridResults.getColumnByKey("Verano").isVisible());
                gridResults.getColumnByKey("Otoño").setVisible(!gridResults.getColumnByKey("Otoño").isVisible());
                gridResults.getColumnByKey("Invierno").setVisible(!gridResults.getColumnByKey("Invierno").isVisible());
                gridResults.getColumnByKey("Primavera").setVisible(!gridResults.getColumnByKey("Primavera").isVisible());
            });

            formulario.add(name,filtros2,gridResults,checkboxGroup,upload);
            Binder<Outfit> binder = new Binder<>();
            binder.forField(name)
                    .withValidator(new StringLengthValidator(
                            "El nombre del outfit es obligatorio", 1, null))
                    .bind(Outfit::getNombre_outfit, Outfit::setNombre_outfit);

            Dialog dialog = new Dialog();
            dialog.add(formulario);
            dialog.setResizable(true);
            Button primaryButton = new Button("Enviar",evento22 ->{
                if (this.valor == 0) {
                    // Mostrar notificación
                    Notification.show("Por favor agregue una foto del outfit");
                }
                else{
                    CloudinaryUploader2 nee = new CloudinaryUploader2();
                    try {
                        this.url = nee.uploadImage("img\\1.jpg");
                    } catch (IOException e) {
                        throw new RuntimeException(e);
                    }
                    Set<String> selectedValues = checkboxGroup.getValue();
                    boolean isPrimaveraSelected = selectedValues.contains("Primavera");
                    boolean isVeranoSelected = selectedValues.contains("Verano");
                    boolean isOtonoSelected = selectedValues.contains("Otoño");
                    boolean isInviernoSelected = selectedValues.contains("Invierno");
                    List<String> listPrendas = new ArrayList<>();
                    Outfit nuevo = new Outfit(8,name.getValue(),url,listPrendas,isVeranoSelected,isOtonoSelected,isInviernoSelected,isPrimaveraSelected,currentUser.getUsername());

                    binder.readBean(nuevo);
                    if(firstColumnValues.size()<2){
                        Dialog dialogError = new Dialog();
                        VerticalLayout v = new VerticalLayout();
                        v.addClassName("centered-content");
                        v.add(new Label("Debe seleccionar al menos 2 prendas."));
                        v.add(new Button("Aceptar", eventCerrar -> dialogError.close()));
                        dialogError.add(v);
                        dialogError.open();
                    }else{
                    if (binder.validate().isOk()){
                        dialog.close();
                        List<String> listPrendas2 = new ArrayList<>();
                        Outfit nuevo2 = new Outfit(8,name.getValue(),url,listPrendas2,isVeranoSelected,isOtonoSelected,isInviernoSelected,isPrimaveraSelected,currentUser.getUsername());

                    Outfit out = DataService.añadirOutfit(nuevo2);
                    for(int j=0;j<firstColumnValues.size();j++){
                        DataService.updateOutPre(out.getOut_id(),firstColumnValues.get(j));
                    }
                    datosOutfits = DataService.getOutfits(currentUser.getUsername());
                        dataProvider = new ListDataProvider<>(datosOutfits);
                        gridR.setDataProvider(dataProvider);
                }
                    else{
                        Dialog dialogError = new Dialog();
                        VerticalLayout v = new VerticalLayout();
                        v.addClassName("centered-content");
                        v.add(new Label("Los valores introducidos son incorrectos. Por favor, corríjalos."));
                        v.add(new Button("Aceptar", eventCerrar -> dialogError.close()));
                        dialogError.add(v);
                        dialogError.open();
                    }}}
            });

            primaryButton.addClassName("button");
            Button cancelButton = new Button("Cancel", evento2 -> dialog.close());
            cancelButton.addClassName("button");

            dialog.add(primaryButton, cancelButton);

            dialog.open();
        });
        addfield.addThemeVariants(ButtonVariant.LUMO_PRIMARY);
        addfield.addClassName("botones");

        //FIN MODAL AÑADIR OUTFIT

        Button filtros = new Button("Filtros", e ->{

            gridR.getColumnByKey("Verano").setVisible(!gridR.getColumnByKey("Verano").isVisible());
            gridR.getColumnByKey("Otoño").setVisible(!gridR.getColumnByKey("Otoño").isVisible());
            gridR.getColumnByKey("Invierno").setVisible(!gridR.getColumnByKey("Invierno").isVisible());
            gridR.getColumnByKey("Primavera").setVisible(!gridR.getColumnByKey("Primavera").isVisible());
        });
        filtros.addThemeVariants(ButtonVariant.LUMO_PRIMARY);
        filtros.addClassName("botones");

        Button actualizar = new Button("Actualizar", event -> {
            datosOutfits = DataService.getOutfits(currentUser.getUsername());
            dataProvider = new ListDataProvider<>(datosOutfits);
            gridR.setDataProvider(dataProvider);
        });
        actualizar.addThemeVariants(ButtonVariant.LUMO_PRIMARY);
        actualizar.addClassName("botones");

        //Se añaden todos los elementos
        HorizontalLayout buttonLayout = new HorizontalLayout();
        buttonLayout.add(addfield, filtros,actualizar);
        option2Form.add(buttonLayout);
        option2Cont.add(option2Form);
        option2gridForm.add(gridR);
        this.add(option2Cont, option2gridForm);
    }
    //Grid principal de OUTFIT
    private Grid<Outfit> resultsGrid() {
        Grid<Outfit> gridResults = new Grid<>(Outfit.class, false);
        gridResults.setColumnReorderingAllowed(true);
        gridResults.setSelectionMode(Grid.SelectionMode.SINGLE);
        gridResults.addThemeVariants(GridVariant.LUMO_ROW_STRIPES);
        gridResults.addThemeVariants(GridVariant.LUMO_COMPACT);
        gridResults.setAllRowsVisible(true);

        gridResults.addColumn(Outfit::getNombre_outfit).setHeader("Outfit").setKey("outfit");
        gridResults.addColumn(Outfit::getPrendas).setHeader("Prendas").setKey("prendas");
        gridResults.addColumn(TemplateRenderer.<Outfit>of("[[item.t_ver]]")
                        .withProperty("Verano", Outfit::isT_ver)).setHeader("Verano").setKey("Verano").setVisible(false);
        gridResults.addColumn(TemplateRenderer.<Outfit>of("[[item.t_oto]]")
                        .withProperty("Otoño", Outfit::isT_oto)).setHeader("Otoño").setKey("Otoño").setVisible(false);
        gridResults.addColumn(TemplateRenderer.<Outfit>of("[[item.t_inv]]")
                        .withProperty("Invierno", Outfit::isT_inv)).setHeader("Invierno").setKey("Invierno").setVisible(false);
        gridResults.addColumn(TemplateRenderer.<Outfit>of("[[item.t_prim]]")
                        .withProperty("Primavera", Outfit::isT_prim)).setHeader("Primavera").setKey("Primavera").setVisible(false);


        gridResults.addComponentColumn(ropa -> {
            Image image = new Image(ropa.getImagen_outfit(), ropa.getNombre_outfit());
            image.setWidth("150px");
            image.setHeight("150px");
            return image;
        }).setHeader("Imagen");

        datosOutfits = DataService.getOutfits(currentUser.getUsername());
        dataProvider = new ListDataProvider<>(datosOutfits);
        gridResults.setDataProvider(dataProvider);

        addGridFilters(gridResults);

        //MODAL DE GRID OUTFIT
        gridResults.addItemDoubleClickListener(event -> {
            Dialog dialog = new Dialog();
            Outfit selected = event.getItem();
            FormLayout formLayout = new FormLayout();
            formLayout.setResponsiveSteps(
                    // Use one column by default
                    new FormLayout.ResponsiveStep("0", 1),
                    // Use two columns, if the layout's width exceeds 320px
                    new FormLayout.ResponsiveStep("320px", 2),
                    // Use three columns, if the layout's width exceeds 500px
                    new FormLayout.ResponsiveStep("500px", 2)
            );
            CheckboxGroup<String> checkboxGroup = new CheckboxGroup<>();
            checkboxGroup.setLabel("Temporada");
            checkboxGroup.setItems("Primavera", "Verano", "Otoño", "Invierno");
            Set<String> defaultSelectedValues = new HashSet<>();
            if (selected.isT_inv() == true){
                defaultSelectedValues.add("Invierno");
            }
            if (selected.isT_oto() == true) {
                defaultSelectedValues.add("Otoño");
            }
            if (selected.isT_prim() == true) {
                defaultSelectedValues.add("Primavera");
            }
            if (selected.isT_ver() == true) {
                defaultSelectedValues.add("Verano");
            }
            checkboxGroup.setValue(defaultSelectedValues);

            Grid<Prenda> gridResults2 = new Grid<>(Prenda.class, false);
            gridResults2.setColumnReorderingAllowed(true);
            gridResults2.setSelectionMode(Grid.SelectionMode.MULTI);
            gridResults2.addThemeVariants(GridVariant.LUMO_ROW_STRIPES);
            gridResults2.addThemeVariants(GridVariant.LUMO_COMPACT);
            gridResults2.setAllRowsVisible(true);

            gridResults2.addColumn(Prenda::getNombre_prenda).setHeader("Prenda").setKey("nombre");
            gridResults2.addColumn(Prenda::getTipo).setHeader("Tipo").setKey("tipo").setVisible(false);
            gridResults2.addColumn(Prenda::getColor).setHeader("Color").setKey("color").setVisible(false);
            gridResults2.addColumn(Prenda::getMarca).setHeader("Marca").setKey("marca").setVisible(false);
            gridResults2.addColumn(TemplateRenderer.<Prenda>of("[[item.t_ver]]")
                            .withProperty("Verano", Prenda::isT_ver))
                    .setHeader("Verano").setKey("Verano").setVisible(false);
            gridResults2.addColumn(TemplateRenderer.<Prenda>of("[[item.t_oto]]")
                            .withProperty("Otoño", Prenda::isT_oto))
                    .setHeader("Otoño").setKey("Otoño").setVisible(false);
            gridResults2.addColumn(TemplateRenderer.<Prenda>of("[[item.t_inv]]")
                            .withProperty("Invierno", Prenda::isT_inv))
                    .setHeader("Invierno").setKey("Invierno").setVisible(false);
            gridResults2.addColumn(TemplateRenderer.<Prenda>of("[[item.t_prim]]")
                            .withProperty("Primavera", Prenda::isT_prim))
                    .setHeader("Primavera").setKey("Primavera").setVisible(false);

            gridResults2.addComponentColumn(ropa -> {
                Image image = new Image(ropa.getImagen_prenda(), ropa.getNombre_prenda());
                image.setWidth("150px");
                image.setHeight("150px");
                return image;
            }).setHeader("Imagen");

            datosPrendas = DataService.getPrendas(currentUser.getUsername());
            dataProvider2 = new ListDataProvider<>(datosPrendas);
            gridResults2.setDataProvider(dataProvider2);

            addGridFiltersPrenda(gridResults2);
            gridResults2.addSelectionListener(selection -> {
                Set<Prenda> selectedItems = selection.getAllSelectedItems();
                if (selectedItems.size() >= 2){
                    firstColumnValues = new ArrayList<>();
                    for (Prenda selectedItem : selectedItems) {
                        int firstColumnValue = selectedItem.getPre_id();
                        firstColumnValues.add(firstColumnValue);
                    }}
                else {
                    Notification.show("Debe seleccionar al menos 2 prendas");
                }
        });
            TextField name = new TextField("Name");
            name.setValue(selected.getNombre_outfit());
            Upload upload = new Upload();

            // Set the receiver to handle the uploaded file
            upload.setReceiver(new Receiver() {
                @Override
                public OutputStream receiveUpload(String fileName, String mimeType) {
                    // Return a stream to write the uploaded file to
                    try {
                        return new FileOutputStream(new File("img", "1.jpg"));
                    } catch (FileNotFoundException e) {
                        e.printStackTrace();
                        return null;
                    }
                }
            });
            // Set the label of the upload button
            upload.setUploadButton(new Button("Upload", buttonClickEvent -> {
                this.valor = 1;
            }));

            Button filtros2 = new Button("Filtros", e ->{
                gridResults2.getColumnByKey("tipo").setVisible(!gridResults2.getColumnByKey("tipo").isVisible());
                gridResults2.getColumnByKey("marca").setVisible(!gridResults2.getColumnByKey("marca").isVisible());
                gridResults2.getColumnByKey("color").setVisible(!gridResults2.getColumnByKey("color").isVisible());
                gridResults2.getColumnByKey("Verano").setVisible(!gridResults2.getColumnByKey("Verano").isVisible());
                gridResults2.getColumnByKey("Otoño").setVisible(!gridResults2.getColumnByKey("Otoño").isVisible());
                gridResults2.getColumnByKey("Invierno").setVisible(!gridResults2.getColumnByKey("Invierno").isVisible());
                gridResults2.getColumnByKey("Primavera").setVisible(!gridResults2.getColumnByKey("Primavera").isVisible());
            });

            // Add the file upload component to the form
            formLayout.add(name,filtros2,gridResults2,checkboxGroup,upload);
            Binder<Outfit> binder = new Binder<>();
            binder.forField(name)
                    .withValidator(new StringLengthValidator(
                            "El nombre del outfit es obligatorio", 1, null))
                    .bind(Outfit::getNombre_outfit, Outfit::setNombre_outfit);

            Button modificarButton = new Button("Modificar",evento22 ->{
                if (this.valor == 0) {
                    this.url = selected.getImagen_outfit();
                }
                else{
                CloudinaryUploader2 nee = new CloudinaryUploader2();
                try {
                    this.url = nee.uploadImage("img\\1.jpg");
                } catch (IOException e) {
                    throw new RuntimeException(e);
                }}

                Set<String> selectedValues = checkboxGroup.getValue();
                boolean isPrimaveraSelected = selectedValues.contains("Primavera");
                boolean isVeranoSelected = selectedValues.contains("Verano");
                boolean isOtonoSelected = selectedValues.contains("Otoño");
                boolean isInviernoSelected = selectedValues.contains("Invierno");
                binder.readBean(selected);
                if(firstColumnValues.size()<2){
                    Dialog dialogError = new Dialog();
                    VerticalLayout v = new VerticalLayout();
                    v.addClassName("centered-content");
                    v.add(new Label("Debe seleccionar al menos 2 prendas."));
                    v.add(new Button("Aceptar", eventCerrar -> dialogError.close()));
                    dialogError.add(v);
                    dialogError.open();
                }else{
                    if (binder.validate().isOk()){
                dialog.close();
                List<String> listPrendas = new ArrayList<>();
                Outfit modificado = new Outfit(selected.getOut_id(),name.getValue(),url,listPrendas,isVeranoSelected,isOtonoSelected,isInviernoSelected,isPrimaveraSelected,selected.getUser_id());
                datosOutfits = DataService.updateOutfit(modificado);
                for(int j=0;j<firstColumnValues.size();j++){
                    DataService.updateOutPre(selected.getOut_id(),firstColumnValues.get(j));
                }
                datosOutfits = DataService.getOutfits(currentUser.getUsername());
                dataProvider = new ListDataProvider<>(datosOutfits);
                gridResults.setDataProvider(dataProvider);
            }else{
                        Dialog dialogError = new Dialog();
                        VerticalLayout v = new VerticalLayout();
                        v.addClassName("centered-content");
                        v.add(new Label("Los valores introducidos son incorrectos. Por favor, corríjalos."));
                        v.add(new Button("Aceptar", eventCerrar -> dialogError.close()));
                        dialogError.add(v);
                        dialogError.open();
                    }
                }});
            modificarButton.addClassName("button");
            Button eliminarButton = new Button("Eliminar",evento2 -> {
                dialog.close();
                //Eliminar Outfit
                datosOutfits = DataService.eliminarOutfit(selected);
                //Actualizar Grid
                dataProvider = new ListDataProvider<>(datosOutfits);
                gridResults.setDataProvider(dataProvider);

            });
            eliminarButton.addClassName("button");

            Button cancelarButton = new Button("Cancelar",evento2 -> dialog.close());
            cancelarButton.addClassName("button");

            Div contenedorDeBotones = new Div(modificarButton, eliminarButton, cancelarButton);
            contenedorDeBotones.addClassName("contenedor-de-botones");

            dialog.add(formLayout,contenedorDeBotones);
            dialog.open();

    });
        System.out.println(DataService.getReco(currentUser.getUsername(),1));
        return gridResults;
            }}
