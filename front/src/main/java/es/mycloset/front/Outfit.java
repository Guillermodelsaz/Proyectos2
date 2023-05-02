package es.mycloset.front;

import java.util.ArrayList;
import java.util.List;

public class Outfit {
    private int out_id;
    private String nombre_outfit;
    private String imagen_outfit;
    private boolean t_ver;
    private boolean t_oto;
    private boolean t_inv;
    private boolean t_prim;
    private String user_id;

    private List<String> prendas;


    public Outfit(int out_id, String nombre_outfit, String imagen_outfit, List<String> prendas, boolean t_ver, boolean t_oto, boolean t_inv, boolean t_prim, String user_id) {
        this.out_id = out_id;
        this.nombre_outfit = nombre_outfit;
        this.imagen_outfit = imagen_outfit;
        this.t_ver = t_ver;
        this.t_oto = t_oto;
        this.t_inv = t_inv;
        this.t_prim = t_prim;
        this.user_id = user_id;
        this.prendas = prendas;
    }

    public int getOut_id() {
        return out_id;
    }

    public void setOut_id(int out_id) {
        this.out_id = out_id;
    }

    public String getNombre_outfit() {
        return nombre_outfit;
    }

    public void setNombre_outfit(String nombre_outfit) {
        this.nombre_outfit = nombre_outfit;
    }

    public String getImagen_outfit() {
        return imagen_outfit;
    }

    public void setImagen_outfit(String imagen_outfit) {
        this.imagen_outfit = imagen_outfit;
    }

    public boolean isT_ver() {
        return t_ver;
    }

    public void setT_ver(boolean t_ver) {
        this.t_ver = t_ver;
    }

    public boolean isT_oto() {
        return t_oto;
    }

    public void setT_oto(boolean t_oto) {
        this.t_oto = t_oto;
    }

    public boolean isT_inv() {
        return t_inv;
    }

    public void setT_inv(boolean t_inv) {
        this.t_inv = t_inv;
    }

    public boolean isT_prim() {
        return t_prim;
    }

    public void setT_prim(boolean t_prim) {
        this.t_prim = t_prim;
    }

    public String getUser_id() {
        return user_id;
    }

    public void setUser_id(String user_id) {
        this.user_id = user_id;
    }

    public List<String> getPrendas() {
        return prendas;
    }

    public void setPrendas(List<String> prendas) {
        this.prendas = prendas;
    }
}
