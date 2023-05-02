package es.mycloset.front;

import java.sql.Blob;

public class Prenda {
    private int pre_id;
    private String nombre_prenda;
    private String tipo;



    private int donacion;
    private int archivada;
    private String imagen_prenda;
    private String color;
    private String marca;
    private boolean t_ver;
    private boolean t_oto;
    private boolean t_inv;
    private boolean t_prim;
    private String user_id;


    public Prenda(int pre_id, String nombre_prenda, String tipo, int donacion, int archivada, String imagen_prenda, String color, String marca, boolean t_ver, boolean t_oto, boolean t_inv, boolean t_prim, String user_id) {
        this.pre_id = pre_id;
        this.nombre_prenda = nombre_prenda;
        this.tipo = tipo;
        this.donacion = donacion;
        this.archivada = archivada;
        this.imagen_prenda = imagen_prenda;
        this.color = color;
        this.marca = marca;
        this.t_ver = t_ver;
        this.t_oto = t_oto;
        this.t_inv = t_inv;
        this.t_prim = t_prim;
        this.user_id = user_id;
    }

    public int getPre_id() {
        return pre_id;
    }

    public void setPre_id(int pre_id) {
        this.pre_id = pre_id;
    }

    public String getNombre_prenda() {
        return nombre_prenda;
    }

    public void setNombre_prenda(String nombre_prenda) {
        this.nombre_prenda = nombre_prenda;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public int isDonacion() {
        return donacion;
    }

    public void setDonacion(int donacion) {
        this.donacion = donacion;
    }

    public int isArchivada() {
        return archivada;
    }

    public void setArchivada(int archivada) {
        this.archivada = archivada;
    }

    public String getImagen_prenda() {
        return imagen_prenda;
    }

    public void setImagen_prenda(String imagen_prenda) {
        this.imagen_prenda = imagen_prenda;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
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
    }}

