package es.mycloset.back;

import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class PrendaMapper implements RowMapper<Prenda> {

    @Override
    public Prenda mapRow(ResultSet rs, int rowNum) throws SQLException {

        Prenda customer = new Prenda();
        customer.setPre_id(rs.getInt("pre_id"));
        customer.setNombre_prenda(rs.getString("nombre_prenda"));
        customer.setMarca(rs.getString("marca"));
        customer.setImagen_prenda(rs.getString("imagen_prenda"));
        customer.setDonacion(rs.getInt("donacion"));
        customer.setColor(rs.getString("color"));
        customer.setT_inv(rs.getBoolean("t_inv"));
        customer.setT_ver(rs.getBoolean("t_ver"));
        customer.setT_prim(rs.getBoolean("t_prim"));
        customer.setT_oto(rs.getBoolean("t_oto"));
        customer.setTipo(rs.getString("tipo"));
        customer.setArchivada(rs.getInt("archivada"));
        customer.setUser_id(rs.getString("user_id"));
        return customer;

    }
}
