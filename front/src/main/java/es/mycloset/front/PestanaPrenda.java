package es.mycloset.front;

import com.vaadin.flow.component.button.ButtonVariant;
import com.vaadin.flow.component.checkbox.Checkbox;
import com.vaadin.flow.component.checkbox.CheckboxGroup;
import com.vaadin.flow.component.dependency.CssImport;
import com.vaadin.flow.component.dialog.Dialog;
import com.vaadin.flow.component.formlayout.FormLayout;
import com.vaadin.flow.component.grid.GridVariant;
import com.vaadin.flow.component.grid.HeaderRow;
import com.vaadin.flow.component.html.*;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.icon.VaadinIcon;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.upload.Receiver;
import com.vaadin.flow.component.upload.Upload;
import com.vaadin.flow.data.binder.Binder;
import com.vaadin.flow.data.provider.ListDataProvider;
import com.vaadin.flow.component.select.Select;
import com.vaadin.flow.data.renderer.TemplateRenderer;
import com.vaadin.flow.data.validator.StringLengthValidator;
import org.apache.commons.lang3.StringUtils;
import java.io.*;
import java.util.*;

@CssImport("./styles/shared-styles.css")
@CssImport(value = "./styles/vaadin-text-field-styles.css", themeFor = "vaadin-text-field")
public class PestanaPrenda extends VerticalLayout {

    /**
     * Clase empleada para la creación de la vista principal de la aplicación.
     */
    HorizontalLayout option1gridForm;
    VerticalLayout option1Form;
    VerticalLayout option1Pop;
    ArrayList<Prenda> datosPrendas;
    ListDataProvider<Prenda> dataProvider;
    Grid<Prenda> gridR;

    VerticalLayout option1Cont;

    int valor = 0;
    String url;
    User currentUser  = User.getCurrentUser();

    private void addGridFilters(Grid<Prenda> grid) {
        /** Método utilizado para aplicar filtros de búsqueda sobre el grid de las prendas
         * Recibe: un grid de prendas
         **/
        HeaderRow filterRow = grid.appendHeaderRow();

        // Filtro nombre de prenda
        TextField nombreFilter = new TextField();
        nombreFilter.setPlaceholder("Filter");
        nombreFilter.setClearButtonVisible(true);
        nombreFilter.addValueChangeListener(event -> dataProvider.addFilter(
                prenda -> StringUtils.containsIgnoreCase(prenda.getNombre_prenda(), nombreFilter.getValue())));
        filterRow.getCell(grid.getColumnByKey("nombre")).setComponent(nombreFilter);

        // Filtro tipo de prenda
        TextField tipoFilter = new TextField();
        tipoFilter.setPlaceholder("Filter");
        tipoFilter.setClearButtonVisible(true);
        tipoFilter.addValueChangeListener(event -> dataProvider.addFilter(
                prenda -> StringUtils.containsIgnoreCase(prenda.getTipo(), tipoFilter.getValue())));
        filterRow.getCell(grid.getColumnByKey("tipo")).setComponent(tipoFilter);

        // Filtro color de prenda
        TextField colorFilter = new TextField();
        colorFilter.setPlaceholder("Filter");
        colorFilter.setClearButtonVisible(true);
        colorFilter.addValueChangeListener(event -> dataProvider.addFilter(
                prenda -> StringUtils.containsIgnoreCase(prenda.getColor(), colorFilter.getValue())));
        filterRow.getCell(grid.getColumnByKey("color")).setComponent(colorFilter);

        // Filtro marca de prenda
        TextField marcaField = new TextField();
        marcaField.setPlaceholder("Filter");
        marcaField.setClearButtonVisible(true);
        marcaField.addValueChangeListener(event -> dataProvider.addFilter(
                prenda -> StringUtils.containsIgnoreCase(prenda.getMarca(), marcaField.getValue())));
        filterRow.getCell(grid.getColumnByKey("marca")).setComponent(marcaField);

        // Filtro temporada verano
        Checkbox t_verFilter = new Checkbox("Verano");
        t_verFilter.addValueChangeListener(event -> {
            dataProvider.addFilter(prenda -> !t_verFilter.getValue() || prenda.isT_ver());
        });
        filterRow.getCell(grid.getColumnByKey("t_ver")).setComponent(t_verFilter);

        // Filtro temporada invierno
        Checkbox t_invFilter = new Checkbox("Invierno");
        t_invFilter.addValueChangeListener(event -> {
            dataProvider.addFilter(prenda -> !t_invFilter.getValue() || prenda.isT_inv());
        });
        filterRow.getCell(grid.getColumnByKey("t_inv")).setComponent(t_invFilter);

        // Filtro temporada otoño
        Checkbox t_otoFilter = new Checkbox("Otoño");
        t_otoFilter.addValueChangeListener(event -> {
            dataProvider.addFilter(prenda -> !t_otoFilter.getValue() || prenda.isT_oto());
        });
        filterRow.getCell(grid.getColumnByKey("t_oto")).setComponent(t_otoFilter);

        // Filtro temporada primavera
        Checkbox t_primFilter = new Checkbox("Primavera");
        t_primFilter.addValueChangeListener(event -> {
            dataProvider.addFilter(prenda -> !t_primFilter.getValue() || prenda.isT_prim());
        });
        filterRow.getCell(grid.getColumnByKey("t_prim")).setComponent(t_primFilter);
    }

    public PestanaPrenda() {

        option1Cont = new VerticalLayout();
        option1gridForm = new HorizontalLayout();
        option1gridForm.setWidth("100%");
        option1Form = new VerticalLayout();
        option1Pop = new VerticalLayout();

        this.gridR = this.resultsGrid();
        this.gridR.addClassName("vaadin-grid-no-click");

        /* Creación del botón para añadir nuevas prendas. Lanza un formulario con los campos a rellenar por el usuario. Una vez
        añadida la prenda se actualiza el grid*/
        Button addfield = new Button("Añadir Prenda", VaadinIcon.PLUS.create());
        addfield.addClickListener(event -> {
            Dialog dialog = new Dialog();
            FormLayout formulario = new FormLayout();
            formulario.setResponsiveSteps(
                    // Diseño Responsive para el modal
                    new FormLayout.ResponsiveStep("0", 1),
                    new FormLayout.ResponsiveStep("320px", 2),
                    new FormLayout.ResponsiveStep("500px", 2)
            );
            //Campo checkbox para la temporada
            CheckboxGroup<String> checkboxGroup = new CheckboxGroup<>();
            checkboxGroup.setLabel("Temporada");
            checkboxGroup.setItems("Primavera", "Verano", "Otoño", "Invierno");

            //Campo tipo select para el tipo de prenda
            Select<String> select = new Select<>();
            select.setLabel("Tipo de Prenda");
            select.setItems("Camisa", "Camiseta", "Pantalón", "Vestido", "Zapatos", "Accesorios", "Abrigo", "Chaqueta");
            select.setValue("Camisa");

            //Campo texto para el nombre, color y marca de la prenda
            TextField name = new TextField("Name");
            name.setPlaceholder("Name");

            TextField color = new TextField("Color");
            color.setPlaceholder("Color");

            TextField marca = new TextField("Marca");
            marca.setPlaceholder("Marca");

            //Campo tipo upload para la carga de foto de la prenda
            Upload upload = new Upload();
            Div contenedorDeCarga = new Div(upload);
            formulario.setColspan(contenedorDeCarga,3);
            contenedorDeCarga.addClassName("contenedor-de-botones");
            formulario.add(name,select, color, marca, checkboxGroup, contenedorDeCarga);
            Binder<Prenda> binder = new Binder<>();
            binder.forField(name)
                    .withValidator(new StringLengthValidator(
                            "El nombre de la prenda es obligatorio", 1, null))
                    .bind(Prenda::getNombre_prenda, Prenda::setNombre_prenda);
            binder.forField(marca)
                    .withValidator(new StringLengthValidator(
                            "La marca de la prenda es obligatoria", 1, null))
                    .bind(Prenda::getMarca, Prenda::setMarca);
            binder.forField(color)
                    .withValidator(new StringLengthValidator(
                            "El color de la prenda es obligatorio", 1, null))
                    .bind(Prenda::getColor, Prenda::setColor);

            // Métodod para posteriormente acceder a la foto de la prenda
            upload.setReceiver(new Receiver() {
                @Override
                public OutputStream receiveUpload(String fileName, String mimeType) {

                    try {
                        return new FileOutputStream(new File("img", "1.jpg"));
                    } catch (FileNotFoundException e) {
                        e.printStackTrace();
                        return null;
                    }
                }
            });
            // Etiqueta del botón
            upload.setUploadButton(new Button("Upload", buttonClickEvent -> {
                this.valor = 1;
            }));

            Label advertenciaLabel = new Label();
            advertenciaLabel.setVisible(false);
            //Botón para enviar la foto a la api y guardar la foto en remoto
            Button primaryButton = new Button("Enviar",evento22 ->{
                if (this.valor == 0) {
                    // Mostrar notificación
                    Notification.show("Por favor agregue una foto de la prenda");
                }
                else{
                    CloudinaryUploader2 nee = new CloudinaryUploader2();
                    try {
                        this.url = nee.uploadImage("img"+File.separatorChar+"1.jpg");
                    } catch (IOException e) {
                        throw new RuntimeException(e);
                    }
                    Set<String> selectedValues = checkboxGroup.getValue();
                    boolean isPrimaveraSelected = selectedValues.contains("Primavera");
                    boolean isVeranoSelected = selectedValues.contains("Verano");
                    boolean isOtonoSelected = selectedValues.contains("Otoño");
                    boolean isInviernoSelected = selectedValues.contains("Invierno");
                    Prenda nuevaPrenda = new Prenda(8,name.getValue(),select.getValue(),0,0,url,color.getValue(),marca.getValue(),isVeranoSelected,isOtonoSelected,isInviernoSelected,isPrimaveraSelected,currentUser.getUsername());

                    binder.readBean(nuevaPrenda);
                    if (binder.validate().isOk()){
                    dialog.close();
                    Prenda nuevaPrenda2 = new Prenda(8,name.getValue(),select.getValue(),0,0,url,color.getValue(),marca.getValue(),isVeranoSelected,isOtonoSelected,isInviernoSelected,isPrimaveraSelected,currentUser.getUsername());
                    datosPrendas = DataService.añadirPrenda(nuevaPrenda2);
                    dataProvider = new ListDataProvider<>(datosPrendas);
                    gridR.setDataProvider(dataProvider);}
                    else{
                        Dialog dialogError = new Dialog();
                        VerticalLayout v = new VerticalLayout();
                        v.addClassName("centered-content");
                        v.add(new Label("Los valores introducidos son incorrectos. Por favor, corríjalos."));
                        v.add(new Button("Aceptar", eventCerrar -> dialogError.close()));
                        dialogError.add(v);
                        dialogError.open();
                    }
                }
            });
            primaryButton.addClassName("button");

            //Botón de cancelar la acción
            Button cancelButton = new Button("Cancel",evento2 -> dialog.close());
            cancelButton.addClassName("button");

            //Se guardan los botones en un div aparte para el estilo centrado
            Div contenedorDeBotones = new Div(primaryButton,cancelButton);
            contenedorDeBotones.addClassName("contenedor-de-botones");
            //Se añaden el formulario y los botones

            dialog.add(formulario,contenedorDeBotones);
            dialog.open();
        });
        addfield.addThemeVariants(ButtonVariant.LUMO_PRIMARY);
        addfield.addClassName("botones");

        //Creación de el botón de filtros para el grid de prenda
        Button filtros = new Button("Filtros", e ->{
            gridR.getColumnByKey("tipo").setVisible(!gridR.getColumnByKey("tipo").isVisible());
            gridR.getColumnByKey("marca").setVisible(!gridR.getColumnByKey("marca").isVisible());
            gridR.getColumnByKey("color").setVisible(!gridR.getColumnByKey("color").isVisible());
            gridR.getColumnByKey("t_ver").setVisible(!gridR.getColumnByKey("t_ver").isVisible());
            gridR.getColumnByKey("t_oto").setVisible(!gridR.getColumnByKey("t_oto").isVisible());
            gridR.getColumnByKey("t_inv").setVisible(!gridR.getColumnByKey("t_inv").isVisible());
            gridR.getColumnByKey("t_prim").setVisible(!gridR.getColumnByKey("t_prim").isVisible());
        });
        filtros.addThemeVariants(ButtonVariant.LUMO_PRIMARY);
        filtros.addClassName("botones");

        Button actualizar = new Button("Actualizar", event -> {
            datosPrendas = DataService.getPrendas(currentUser.getUsername());
            dataProvider = new ListDataProvider<>(datosPrendas);
            gridR.setDataProvider(dataProvider);
        });
        actualizar.addThemeVariants(ButtonVariant.LUMO_PRIMARY);
        actualizar.addClassName("botones");

        //Se añaden todos los elementos
        HorizontalLayout buttonLayout = new HorizontalLayout();
        buttonLayout.add(addfield, filtros,actualizar);
        option1Form.add(buttonLayout);
        option1Cont.add(option1Form);
        option1gridForm.add(gridR);
        this.add(option1Cont, option1gridForm);
    }

    private Grid<Prenda> resultsGrid() {

        /** Método para la creación del grid principal de prendas**/
        Grid<Prenda> gridResults = new Grid<>(Prenda.class, false);
        gridResults.setColumnReorderingAllowed(true);
        gridResults.setSelectionMode(Grid.SelectionMode.SINGLE);
        gridResults.addThemeVariants(GridVariant.LUMO_ROW_STRIPES);
        gridResults.addThemeVariants(GridVariant.LUMO_COMPACT);
        gridResults.setAllRowsVisible(true);
        gridResults.addColumn(Prenda::getNombre_prenda).setHeader("Prenda").setKey("nombre");
        gridResults.addColumn(Prenda::getTipo).setHeader("Tipo").setKey("tipo").setVisible(false);
        gridResults.addColumn(Prenda::getColor).setHeader("Color").setKey("color").setVisible(false);
        gridResults.addColumn(Prenda::getMarca).setHeader("Marca").setKey("marca").setVisible(false);
        gridResults.addColumn(TemplateRenderer.<Prenda>of("[[item.t_ver]]")
                        .withProperty("t_ver", Prenda::isT_ver))
                .setHeader("Verano").setKey("t_ver").setVisible(false);
        gridResults.addColumn(TemplateRenderer.<Prenda>of("[[item.t_oto]]")
                        .withProperty("t_oto", Prenda::isT_oto))
                .setHeader("Otoño").setKey("t_oto").setVisible(false);
        gridResults.addColumn(TemplateRenderer.<Prenda>of("[[item.t_inv]]")
                        .withProperty("t_inv", Prenda::isT_inv))
                .setHeader("Invierno").setKey("t_inv").setVisible(false);
        gridResults.addColumn(TemplateRenderer.<Prenda>of("[[item.t_prim]]")
                        .withProperty("t_prim", Prenda::isT_prim))
                .setHeader("Primavera").setKey("t_prim").setVisible(false);

        gridResults.addComponentColumn(ropa -> {
            Image image = new Image(ropa.getImagen_prenda(), ropa.getNombre_prenda());
            image.setWidth("150px");
            image.setHeight("150px");
            return image;
        }).setHeader("Imagen");

        datosPrendas = DataService.getPrendas(currentUser.getUsername());
        dataProvider = new ListDataProvider<>(datosPrendas);
        gridResults.setDataProvider(dataProvider);

        addGridFilters(gridResults);

        //Al hacer dobleclick sobre una prenda en el grid se abre un modal que permite modificar información sobre la prenda seleccionada
        gridResults.addItemDoubleClickListener(event -> {
            Dialog dialog = new Dialog();
            Prenda selected = event.getItem();
            FormLayout formLayout = new FormLayout();
            formLayout.setResponsiveSteps(
                    // Diseño Responsive para el modal
                    new FormLayout.ResponsiveStep("0", 1),
                    new FormLayout.ResponsiveStep("320px", 2),
                    new FormLayout.ResponsiveStep("500px", 2)
            );

            /*Para el dobleclick se recogen los datos de la prenda seleccionada y directamente se muestran sobre los campos.
            el usuario puede elegir que campos modificar*/
            CheckboxGroup<String> checkboxGroup = new CheckboxGroup<>();
            checkboxGroup.setLabel("Temporada");
            checkboxGroup.setItems("Primavera", "Verano", "Otoño", "Invierno");
            formLayout.setColspan(checkboxGroup,2);
            Set<String> defaultSelectedValues = new HashSet<>();
            if (selected.isT_inv() == true){
                defaultSelectedValues.add("Invierno");
                }
            if (selected.isT_oto()) {
                defaultSelectedValues.add("Otoño");
            }
            if (selected.isT_prim()) {
                defaultSelectedValues.add("Primavera");
            }
            if (selected.isT_ver()) {
                defaultSelectedValues.add("Verano");
            }
            // Se seleccionan los valores por defecto del checkbox de temporada
            checkboxGroup.setValue(defaultSelectedValues);

            Select<String> select = new Select<>();
            select.setLabel("Tipo de Prenda");
            select.setItems("Camisa", "Camiseta", "Pantalón", "Vestido", "Zapatos", "Accesorios", "Abrigo", "Chaqueta");
            select.setValue(selected.getTipo());

            TextField name = new TextField("Name");
            name.setValue(selected.getNombre_prenda());

            TextField color = new TextField("Color");
            color.setValue(selected.getColor());

            TextField marca = new TextField("Marca");
            marca.setValue(selected.getMarca());

            Upload upload = new Upload();
            // Etiqueta del botón upload
            upload.setUploadButton(new Button("Upload", buttonClickEvent -> {
                this.valor = 1;
            }));

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

            //Se hace uso de un div aparte para el diseño
            Div contenedorDeCarga = new Div(upload);
            formLayout.setColspan(contenedorDeCarga,3);
            contenedorDeCarga.addClassName("contenedor-de-botones");
            formLayout.add(name,select, color, marca, checkboxGroup, contenedorDeCarga);

            Binder<Prenda> binder = new Binder<>();
            binder.forField(name)
                    .withValidator(new StringLengthValidator(
                            "El nombre de la prenda es obligatorio", 1, null))
                    .bind(Prenda::getNombre_prenda, Prenda::setNombre_prenda);
            binder.forField(marca)
                    .withValidator(new StringLengthValidator(
                            "La marca de la prenda es obligatoria", 1, null))
                    .bind(Prenda::getMarca, Prenda::setMarca);
            binder.forField(color)
                    .withValidator(new StringLengthValidator(
                            "El color de la prenda es obligatorio", 1, null))
                    .bind(Prenda::getColor, Prenda::setColor);

            //Botón para hacer efectiva la modificación de una prenda. Se actualiza el grid y la información de la prenda
            Button modificarButton = new Button("Modificar",evento22 ->{

                if (this.valor == 0) {
                    this.url = selected.getImagen_prenda();
                }
                else{
                    CloudinaryUploader2 nee = new CloudinaryUploader2();
                    try {
                        this.url = nee.uploadImage("img\\1.jpg");
                    } catch (IOException e) {
                        throw new RuntimeException(e);
                    }
                }
                    Set<String> selectedValues = checkboxGroup.getValue();
                    boolean isPrimaveraSelected = selectedValues.contains("Primavera");
                    boolean isVeranoSelected = selectedValues.contains("Verano");
                    boolean isOtonoSelected = selectedValues.contains("Otoño");
                    boolean isInviernoSelected = selectedValues.contains("Invierno");

                    binder.readBean(selected);
                if (binder.validate().isOk()){
                    dialog.close();
                    Prenda modificada = new Prenda(selected.getPre_id(),name.getValue(),select.getValue(),0,0,url,color.getValue(),marca.getValue(),isVeranoSelected,isOtonoSelected,isInviernoSelected,isPrimaveraSelected,selected.getUser_id());
                    datosPrendas = DataService.updatePrenda(modificada);
                    dataProvider = new ListDataProvider<>(datosPrendas);
                    gridResults.setDataProvider(dataProvider);}
                else{
                    Dialog dialogError = new Dialog();
                    VerticalLayout v = new VerticalLayout();
                    v.addClassName("centered-content");
                    v.add(new Label("Los valores introducidos son incorrectos. Por favor, corríjalos."));
                    v.add(new Button("Aceptar", eventCerrar -> dialogError.close()));
                    dialogError.add(v);
                    dialogError.open();
                }

                });
            modificarButton.addClassName("button");

            //Botón para eliminar una prenda
            Button eliminarButton = new Button("Eliminar",evento2 -> {

                dialog.close();
                //Eliminar prenda
                datosPrendas = DataService.eliminarPrenda(selected);
                //Actualizar Grid
                dataProvider = new ListDataProvider<>(datosPrendas);
                gridResults.setDataProvider(dataProvider);}
            );
            eliminarButton.addClassName("button");

            //Botón para marcar una prenda para archivar
            Button archivarButton = new Button("Archivar",evento2 -> {

                dialog.close();

                //Archivar prenda
                datosPrendas = DataService.archivarPrenda(selected);
                //Actualizar Grid
                dataProvider = new ListDataProvider<>(datosPrendas);
                gridResults.setDataProvider(dataProvider);
            });
            archivarButton.addClassName("button");

            //Botón para marcar una prenda para donar
            Button donarButton = new Button("Donar",evento2 -> {
                //donar prenda
                dialog.close();
                //Archivar prenda
                datosPrendas = DataService.donarPrenda(selected);
                //Actualizar Grid
                dataProvider = new ListDataProvider<>(datosPrendas);
                gridResults.setDataProvider(dataProvider);
            });
            donarButton.addClassName("button");

            //Botón para cancelar acción
            Button cancelarButton = new Button("Cancelar",evento2 -> {dialog.close();});
            cancelarButton.addClassName("button");

            //Se hace uso de un div para el diseño
            Div contenedorDeBotones = new Div(modificarButton, eliminarButton, archivarButton, donarButton, cancelarButton);
            contenedorDeBotones.addClassName("contenedor-de-botones");

            //Se añaden el formulario y los botones del modal
            dialog.add(formLayout,contenedorDeBotones);
            dialog.open();
        });

        return gridResults;
    }
}