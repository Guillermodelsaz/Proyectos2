package es.mycloset.front;

import com.vaadin.flow.component.html.Image;

public class Prendas {

    private Integer idPrenda;
    private String nombre;

    public Prendas() {
    }

    public Prendas(Integer idPrenda, String nombre) {

        this.nombre = nombre;
        this.idPrenda = idPrenda;
    }
    public String getNombre() { return nombre;}
    public void setNombre(String nombre) {this.nombre = nombre;}


    public Integer getId() { return idPrenda;}
    public void setId(Integer idPrenda) {this.idPrenda = idPrenda;}

}