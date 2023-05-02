package es.mycloset.back;

import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class OutfitMapper implements RowMapper<Outfit> {

    @Override
    public Outfit mapRow(ResultSet rs, int rowNum) throws SQLException {

        Outfit customer = new Outfit();
        customer.setOut_id(rs.getInt("out_id"));
        customer.setNombre_outfit(rs.getString("nombre_outfit"));
        customer.setImagen_outfit(rs.getString("imagen_outfit"));
        customer.setT_inv(rs.getBoolean("t_inv"));
        customer.setT_ver(rs.getBoolean("t_ver"));
        customer.setT_prim(rs.getBoolean("t_prim"));
        customer.setT_oto(rs.getBoolean("t_oto"));
        customer.setUser_id(rs.getString("user_id"));
        return customer;
    }
}

