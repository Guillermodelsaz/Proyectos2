package es.mycloset.back;

import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class OutPre_Mapper implements RowMapper<outpre> {

    @Override
    public outpre mapRow(ResultSet rs, int rowNum) throws SQLException {

        outpre customer = new outpre();
        customer.setPre_id(rs.getInt("pre_id"));
        customer.setOut_id(rs.getInt("out_id"));
        return customer;

    }
}
