package es.mycloset.front;

import com.vaadin.flow.component.Text;
import com.vaadin.flow.component.applayout.AppLayout;
import com.vaadin.flow.component.cookieconsent.CookieConsent;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.html.Image;
import com.vaadin.flow.component.html.Main;
import com.vaadin.flow.component.orderedlayout.FlexComponent;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.tabs.Tab;
import com.vaadin.flow.component.tabs.Tabs;
import com.vaadin.flow.router.Route;

@Route("main")
public class MainPage extends VerticalLayout {

    VerticalLayout option1Cont;
    VerticalLayout option2Cont;
    VerticalLayout option3Cont;
    VerticalLayout option4Cont;
    VerticalLayout option5Cont;

    public MainPage() {
        VerticalLayout mainLayout = new VerticalLayout();
        mainLayout.addClassName("centered-content");

        AppLayoutNavbar appLayout = new AppLayoutNavbar();
        add(appLayout, mainLayout);

        option1Cont = new VerticalLayout();
        PestanaPrenda option1Generator = new PestanaPrenda();
        option1Generator.addClassName("no-space-above");
        option1Cont.add(option1Generator);
        option1Cont.setVisible(true);
        option2Cont = new VerticalLayout();
        PestanaOutfit option2Generator = new PestanaOutfit();
        option2Cont.add(option2Generator);
        option2Cont.setVisible(false);
        option3Cont = new VerticalLayout();
        PestanaArchivo option3Generator = new PestanaArchivo();
        option3Cont.add(option3Generator);
        option3Cont.setVisible(false);
        option4Cont = new VerticalLayout();
        PestanaDonacion option4Generator = new PestanaDonacion();
        option4Cont.add(option4Generator);
        option4Cont.setVisible(false);
        option5Cont = new VerticalLayout();
        PestanaReco option5Generator = new PestanaReco();
        option5Cont.add(option5Generator);
        option5Cont.setVisible(false);

        add(option1Cont, option2Cont,option3Cont,option4Cont,option5Cont);
    }
    public class AppLayoutNavbar extends AppLayout {

        public AppLayoutNavbar() {
            Image image = new Image("https://res.cloudinary.com/ddfqxbkwo/image/upload/v1682850663/logo_2_mycloset_rf3gpa.png", "Imagen");
            image.getStyle()
                    .set("font-size", "var(--lumo-font-size-l)")
                    .set("left", "var(--lumo-space-l)")
                    .set("margin", "0")
                    .set("position", "absolute")
                    .set("width", "80px")
                    .set("height", "80px");

            Tab option1 = new Tab("Prendas");
            option1.getStyle().set("font-size", "20px").set("color", "#776b53");
            Tab option2 = new Tab("Outfits");
            option2.getStyle().set("font-size", "20px");
            Tab option3 = new Tab("Archivo");
            option3.getStyle().set("font-size", "20px");
            Tab option4 = new Tab("Donaciones");
            option4.getStyle().set("font-size", "20px");
            Tab option5 = new Tab("Recomendaciones");
            option5.getStyle().set("font-size", "20px");
            Tabs tabs = new Tabs(option1, option2, option3, option4,option5);

            tabs.addClassName("centered-content");

            tabs.addSelectedChangeListener(event -> {
                        tabs.getChildren()
                                .forEach(tab -> {
                                    if (tab.equals(event.getSelectedTab())) {
                                        tab.getElement().getClassList().add("selected");
                                    } else {
                                        tab.getElement().getClassList().remove("selected");
                                    }
                                });

                        this.hideContainers();
                        Tab selectedTab = event.getSelectedTab();
                        if (selectedTab == option1) {
                            option1Cont.setVisible(true);
                        } else if (selectedTab == option2) {
                            option2Cont.setVisible(true);
                        } else if (selectedTab == option3) {
                            option3Cont.setVisible(true);
                        } else if (selectedTab == option4) {
                            option4Cont.setVisible(true);
                        } else if (selectedTab == option5) {
                            option5Cont.setVisible(true);
                        }
                    });
            addToNavbar(image, tabs);
        }
        private void hideContainers() {
            option1Cont.setVisible(false);
            option2Cont.setVisible(false);
            option3Cont.setVisible(false);
            option4Cont.setVisible(false);
            option5Cont.setVisible(false);
        }
    }
}