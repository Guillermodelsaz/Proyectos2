package es.mycloset.back;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class UserDAO {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public List<User> getUsers() {
        String sql = "SELECT * FROM usuario";

        List<User> usrs = jdbcTemplate.query(
                sql,
                new UserMapper());
        return usrs;
    }

    public User insertUser(String username, String password) {
        String sql = "INSERT INTO usuario (user_id, contrasena) VALUES (?, ?)";
        User ins = new User();
        ins.setUsername(username);
        ins.setPassword(password);
        int rowsInserted = jdbcTemplate.update(sql, username, password);
        if (rowsInserted > 0) {
            System.out.println("Usuario insertado");
        }
    return ins;}

    public void añadirPrenda(Prenda prenda) {
        String sql = "INSERT INTO prenda (nombre_prenda, tipo, imagen_prenda, color, marca, t_ver, t_oto, t_inv,t_prim, pre_id, user_id) VALUES (?,?,?,?,?,?,?,?,?,?,?)";
        jdbcTemplate.update(sql, prenda.getNombre_prenda(),prenda.getTipo(),prenda.getImagen_prenda(), prenda.getColor(),  prenda.getMarca(),prenda.isT_ver(),prenda.isT_oto(), prenda.isT_inv(), prenda.isT_prim(), prenda.getPre_id(), prenda.getUser_id());
    }
    public void añadirOutfit(Outfit outfit) {
        String sql = "INSERT INTO outfit (nombre_outfit,imagen_outfit,t_ver, t_oto, t_inv,t_prim, out_id, user_id) VALUES (?,?,?,?,?,?,?,?)";
        jdbcTemplate.update(sql, outfit.getNombre_outfit(),outfit.getImagen_outfit(), outfit.isT_ver(),outfit.isT_oto(), outfit.isT_inv(), outfit.isT_prim(), outfit.getOut_id(), outfit.getUser_id());
    }

        public User getUserByUsername(String username) {
            String sql = "SELECT * FROM usuario WHERE user_id = ?";

            List<User> users = jdbcTemplate.query(
                    sql,
                    new Object[]{username},
                    new UserMapper());

            if (users.isEmpty()) {
                return null;
            } else {
                return users.get(0);
            }
        }

    public List<Prenda> getPrendas(String userId) {
        String sql = "SELECT * FROM prenda where user_id= ? and archivada =0 and donacion =0";

        List<Prenda> usrs = jdbcTemplate.query(
                sql,
                new Object[]{userId},
                new PrendaMapper());
        return usrs;
    }

    public List<Outfit> getOutfits(String userId) {
        String sql = "SELECT * FROM outfit where user_id= ?";

        List<Outfit> usrs = jdbcTemplate.query(
                sql,
                new Object[]{userId},
                new OutfitMapper());
        return usrs;
    }
    public void elimOutfit(int out) {
        String sql = "DELETE FROM outfit WHERE out_id = ?";
        jdbcTemplate.update(sql, out);
    }
    public void ArchivarPrenda(int pre) {
        String sql = "  UPDATE prenda SET archivada = 1 WHERE pre_id= ?";
        jdbcTemplate.update(sql, pre);
    }
    public void DonarPrenda(int pre) {
        String sql = "  UPDATE prenda SET donacion = 1 WHERE pre_id= ?";
        jdbcTemplate.update(sql, pre);
    }
    public void DesmarcarPrenda(int pre) {
        String sql = "  UPDATE prenda SET donacion = 0, archivada = 0 WHERE pre_id= ?";
        jdbcTemplate.update(sql, pre);
    }
    public void updatePrenda(Prenda prenda, int id) {
        String sql = "  UPDATE prenda SET nombre_prenda = ?, tipo = ?, imagen_prenda = ?, color = ?, marca = ?, t_ver = ?, t_oto = ?, t_inv = ?, t_prim = ?  WHERE pre_id= ?";
        jdbcTemplate.update(sql, prenda.getNombre_prenda(),prenda.getTipo(),prenda.getImagen_prenda(), prenda.getColor(),  prenda.getMarca(),prenda.isT_ver(),prenda.isT_oto(), prenda.isT_inv(), prenda.isT_prim(), id);
    }
    public void eliminarPrenda(int pre) {
        String sql = " DELETE FROM prenda WHERE pre_id= ?";
        jdbcTemplate.update(sql, pre);
    }
    public void updateOutfit(Outfit out, int id) {
        String sql = "  UPDATE outfit SET nombre_outfit = ?, imagen_outfit = ?, t_ver = ?, t_oto = ?, t_inv = ?, t_prim = ? WHERE out_id= ?";
        jdbcTemplate.update(sql,out.getNombre_outfit(),out.getImagen_outfit(),out.isT_ver(),out.isT_oto(),out.isT_inv(),out.isT_prim(), id);
    }
    public void elimOutPre(int id) {
        String sql = " DELETE FROM out_pre WHERE out_id= ?";
        jdbcTemplate.update(sql, id);
     }
    public void insertOutPre(int out, int pre) {
        String sql = "INSERT INTO out_pre (out_id, pre_id) VALUES (?,?)";
        jdbcTemplate.update(sql,out, pre);
    }
    public List<Prenda> getPrendasdona(String userId) {
        String sql = "SELECT * FROM prenda where user_id= ? and archivada =0 and donacion =1";

        List<Prenda> usrs = jdbcTemplate.query(
                sql,
                new Object[]{userId},
                new PrendaMapper());
        return usrs;
    }
    public List<Prenda> getPrendasarch(String userId) {
        String sql = "SELECT * FROM prenda where user_id= ? and archivada =1 and donacion =0";

        List<Prenda> usrs = jdbcTemplate.query(
                sql,
                new Object[]{userId},
                new PrendaMapper());
        return usrs;
    }

    public List<Outfit> getReco(String userId, int temp) {
        String sql = "SELECT * FROM outfit where user_id= ?";

        if (temp == 1){
             sql = "SELECT * FROM outfit where user_id= ? and t_ver =1";
        } else if (temp == 2) {
             sql = "SELECT * FROM outfit where user_id= ?  and t_inv =1";
        }
        else if (temp == 3) {
             sql = "SELECT * FROM outfit where user_id= ?  and t_oto =1";
        }
        else {
             sql = "SELECT * FROM outfit where user_id= ?  and t_prim =1";
        }
        List<Outfit> out = jdbcTemplate.query(
                sql,
                new Object[]{userId},
                new OutfitMapper());
        return out;
    }

    public List<Integer> traerids(Outfit outfit) {
        String sql = "SELECT pre_id FROM out_pre where out_id= ?";
        List<Integer> usrs = jdbcTemplate.queryForList(sql, new Object[]{outfit.getOut_id()}, Integer.class);
        return usrs;
    }
    public List<String> traerprendas(int ids) {
        String sql = "SELECT nombre_prenda FROM prenda where pre_id= ?";
        List<String> usrs = jdbcTemplate.queryForList(sql, new Object[]{ids}, String.class);
        return usrs;
    }
}





