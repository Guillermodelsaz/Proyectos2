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
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.upload.Receiver;
import com.vaadin.flow.component.upload.Upload;
import com.vaadin.flow.data.provider.ListDataProvider;
import com.vaadin.flow.component.select.Select;
import com.vaadin.flow.data.renderer.TemplateRenderer;
import org.apache.commons.lang3.StringUtils;
import java.util.*;

@CssImport("./styles/shared-styles.css")
@CssImport(value = "./styles/vaadin-text-field-styles.css", themeFor = "vaadin-text-field")
public class PestanaDonacion extends VerticalLayout {


    HorizontalLayout option1gridForm;
    VerticalLayout option1Form;
    VerticalLayout option1Pop;
    ArrayList<Prenda> datosPrendas;
    ListDataProvider<Prenda> dataProvider;
    Grid<Prenda> gridR;

    /**
     * Clase empleada para la creación de la vista principal de la aplicación.
     */
    VerticalLayout option1Cont;
    User currentUser  = User.getCurrentUser();

    private void addGridFilters(Grid<Prenda> grid) {
        HeaderRow filterRow = grid.appendHeaderRow();

        // Outfit filter
        TextField nombreFilter = new TextField();
        nombreFilter.setPlaceholder("Filter");
        nombreFilter.setClearButtonVisible(true);
        nombreFilter.addValueChangeListener(event -> dataProvider.addFilter(
                prenda -> StringUtils.containsIgnoreCase(prenda.getNombre_prenda(), nombreFilter.getValue())));
        filterRow.getCell(grid.getColumnByKey("nombre")).setComponent(nombreFilter);

        TextField tipoFilter = new TextField();
        tipoFilter.setPlaceholder("Filter");
        tipoFilter.setClearButtonVisible(true);
        tipoFilter.addValueChangeListener(event -> dataProvider.addFilter(
                prenda -> StringUtils.containsIgnoreCase(prenda.getTipo(), tipoFilter.getValue())));
        filterRow.getCell(grid.getColumnByKey("tipo")).setComponent(tipoFilter);

        TextField colorFilter = new TextField();
        colorFilter.setPlaceholder("Filter");
        colorFilter.setClearButtonVisible(true);
        colorFilter.addValueChangeListener(event -> dataProvider.addFilter(
                prenda -> StringUtils.containsIgnoreCase(prenda.getColor(), colorFilter.getValue())));
        filterRow.getCell(grid.getColumnByKey("color")).setComponent(colorFilter);

        TextField marcaField = new TextField();
        marcaField.setPlaceholder("Filter");
        marcaField.setClearButtonVisible(true);
        marcaField.addValueChangeListener(event -> dataProvider.addFilter(
                prenda -> StringUtils.containsIgnoreCase(prenda.getMarca(), marcaField.getValue())));
        filterRow.getCell(grid.getColumnByKey("marca")).setComponent(marcaField);

        Checkbox t_verFilter = new Checkbox("Verano");
        t_verFilter.addValueChangeListener(event -> {
            dataProvider.addFilter(prenda -> !t_verFilter.getValue() || prenda.isT_ver());
        });
        filterRow.getCell(grid.getColumnByKey("t_ver")).setComponent(t_verFilter);

        Checkbox t_invFilter = new Checkbox("Invierno");
        t_invFilter.addValueChangeListener(event -> {
            dataProvider.addFilter(prenda -> !t_invFilter.getValue() || prenda.isT_inv());
        });
        filterRow.getCell(grid.getColumnByKey("t_inv")).setComponent(t_invFilter);

        Checkbox t_otoFilter = new Checkbox("Otoño");
        t_otoFilter.addValueChangeListener(event -> {
            dataProvider.addFilter(prenda -> !t_otoFilter.getValue() || prenda.isT_ver());
        });
        filterRow.getCell(grid.getColumnByKey("t_oto")).setComponent(t_otoFilter);

        Checkbox t_primFilter = new Checkbox("Primavera");
        t_primFilter.addValueChangeListener(event -> {
            dataProvider.addFilter(prenda -> !t_primFilter.getValue() || prenda.isT_prim());
        });
        filterRow.getCell(grid.getColumnByKey("t_prim")).setComponent(t_primFilter);
    }

    public PestanaDonacion() {

        option1Cont = new VerticalLayout();
        option1gridForm = new HorizontalLayout();
        option1gridForm.setWidth("100%");
        option1Form = new VerticalLayout();
        option1Pop = new VerticalLayout();

        this.gridR = this.resultsGrid();
        this.gridR.addClassName("vaadin-grid-no-click");

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
            datosPrendas = DataService.getPrendasdona(currentUser.getUsername());
            dataProvider = new ListDataProvider<>(datosPrendas);
            gridR.setDataProvider(dataProvider);
        });
        actualizar.addThemeVariants(ButtonVariant.LUMO_PRIMARY);
        actualizar.addClassName("botones");

        HorizontalLayout buttonLayout = new HorizontalLayout();
        buttonLayout.add(filtros, actualizar);
        option1Form.add(buttonLayout);
        option1Cont.add(option1Form);
        option1gridForm.add(gridR);
        this.add(option1Cont, option1gridForm);
    }
    private Grid<Prenda> resultsGrid() {
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
        datosPrendas = DataService.getPrendasdona(currentUser.getUsername());
        dataProvider = new ListDataProvider<>(datosPrendas);
        gridResults.setDataProvider(dataProvider);

        addGridFilters(gridResults);

        //MODAL DE MOSTRAR PRENDA
        gridResults.addItemDoubleClickListener(event -> {
            Dialog dialog = new Dialog();
            Prenda selected = event.getItem();
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
            checkboxGroup.setReadOnly(true);
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
            // Set the default selected value(s) for the CheckboxGroup
            checkboxGroup.setValue(defaultSelectedValues);
            checkboxGroup.select("Order ID", "Customer");
            Select<String> select = new Select<>();
            select.setLabel("Tipo de Prenda");
            select.setItems("Camisa", "Camiseta", "Pantalón", "Vestido", "Zapatos", "Accesorios", "Abrigo", "Chaqueta");
            select.setValue(selected.getTipo());
            TextField name = new TextField("Name");
            name.setValue(selected.getNombre_prenda());
            name.setReadOnly(true);
            TextField color = new TextField("Color");
            color.setValue(selected.getColor());
            color.setReadOnly(true);
            TextField marca = new TextField("Marca");
            marca.setValue(selected.getMarca());
            marca.setReadOnly(true);

            formLayout.add(name, color, marca, checkboxGroup);

            Button eliminarButton = new Button("Desmarcar",evento2 -> {
                dialog.close();

                //Desmarcar Prenda
                datosPrendas = DataService.desmarcar(selected);

                //Actualizar Grid
                dataProvider = new ListDataProvider<>(datosPrendas);
                gridR.setDataProvider(dataProvider);
            });
            eliminarButton.addClassName("button");
            Button cancelarButton = new Button("Cancelar",evento2 -> dialog.close());
            cancelarButton.addClassName("button");
            Div contenedorDeBotones = new Div(eliminarButton, cancelarButton);
            contenedorDeBotones.addClassName("contenedor-de-botones");

            dialog.add(formLayout,contenedorDeBotones);
            dialog.open();
        });
        return gridResults;
    }
}