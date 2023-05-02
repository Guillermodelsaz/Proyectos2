package es.mycloset.back;


import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class UserMapper implements RowMapper<User> {

    @Override
    public User mapRow(ResultSet rs, int rowNum) throws SQLException {

        User customer = new User();
        customer.setUsername(rs.getString("user_id"));
        customer.setPassword(rs.getString("contrasena"));


        return customer;

    }
}
