package es.mycloset.back;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class UserService {

    @Autowired
    private UserDAO userDAO;

    public List<User> getUsers() {
        return userDAO.getUsers();
    }

    public List<Prenda> getPrendaByUserId(String userId) {
        return userDAO.getPrendas(userId);
    }


    public ResponseEntity<String> handleUserPost(User userPost) {


        User existingUser = userDAO.getUserByUsername(userPost.getUsername());
        if (existingUser == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("null");
        } else if (existingUser.getPassword().equals(userPost.getPassword())) {
            return ResponseEntity.ok(existingUser.getUsername());
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("null"); /* DEVUELVEN LA MISMA EXCEPCION
                PARA NO SABER SI ES EL USUARIO O LA CONTRA LO INCORRECTO*/
        }
    }
    public ResponseEntity<String> insertUserPost(User userPost) {
        User existingUser = userDAO.getUserByUsername(userPost.getUsername());
        if (existingUser == null) {
            User createdUser = userDAO.insertUser(userPost.getUsername(), userPost.getPassword());
            return ResponseEntity.ok("bien");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("mal");
        } /*SI USUAIO NO EXISTE LO INSERTA SI EXISTE DEVUELVE EXCEPCION*/

    }

    public Optional<Integer> cogerMaxIdPrendas(List<Prenda> zbs){
        return zbs.stream()
                .map(Prenda::getPre_id)
                .max(Integer::compareTo);

    }
    public List<Prenda> añadirPrenda(Prenda prenda) {
        List<Prenda> listaPrenda = userDAO.getPrendas(prenda.getUser_id());
        prenda.setPre_id(cogerMaxIdPrendas(listaPrenda).orElse(0) + 1);
        userDAO.añadirPrenda(prenda);
        List<Prenda> prendas = userDAO.getPrendas(prenda.getUser_id());
        return prendas;
    }

    public Optional<Integer> cogerMaxIdOutfits(List<Outfit> zbs){
        return zbs.stream()
                .map(Outfit::getOut_id)
                .max(Integer::compareTo);

    }
    public Outfit añadirOutfit(int id, Outfit outfit) {
        List<Outfit> listaOutfit = userDAO.getOutfits(outfit.getUser_id());
        outfit.setOut_id(cogerMaxIdOutfits(listaOutfit).orElse(0)+1);
        userDAO.añadirOutfit(outfit);
        System.out.println(outfit);
        return outfit;
    }
    public List<Prenda> archivo(int id, Prenda prenda) {
        userDAO.ArchivarPrenda(id);
        List<Prenda> prendas = userDAO.getPrendas(prenda.getUser_id());
        return prendas;
    }
    public List<Prenda> donar(int id, Prenda prenda) {
        userDAO.DonarPrenda(id);
        List<Prenda> prendas = userDAO.getPrendas(prenda.getUser_id());
        return prendas;
    }
    public List<Prenda> eliminarPrenda(int id, Prenda prenda) {
        List<Outfit> outfit = getOutfitByUserId(prenda.getUser_id());
        for(int i = 0; i<outfit.size();i++){
            List<String> prendas = outfit.get(i).getPrendas();
            for(int j = 0; j<prendas.size();j++){
                if (prendas.get(j).equals(prenda.getNombre_prenda())){
                    userDAO.elimOutfit(outfit.get(i).getOut_id());
                }
            }
        }
        userDAO.eliminarPrenda(id);
        List<Prenda> prendas = userDAO.getPrendas(prenda.getUser_id());
        return prendas;
    }
    public List<Outfit> eliminarOutfit(int id, Outfit outfit) {
        userDAO.elimOutPre(id);
        userDAO.elimOutfit(id);
        List<Outfit> outfits = userDAO.getOutfits(outfit.getUser_id());
        return outfits;
    }
    public List<Prenda> desmarcar(int id, Prenda prenda) {
        userDAO.DesmarcarPrenda(id);
        if (prenda.isArchivada() == 0){
        List<Prenda> prendas = userDAO.getPrendasarch(prenda.getUser_id());
        return prendas;
        }
        List<Prenda> prendas = userDAO.getPrendasdona(prenda.getUser_id());
        return prendas;
    }
    public List<Prenda> updatePrenda(int id, Prenda prenda) {
        userDAO.updatePrenda(prenda, id);
        List<Prenda> prendas = userDAO.getPrendas(prenda.getUser_id());
        return prendas;
    }
    public List<Outfit> updateOut(int id, Outfit out) {
        userDAO.elimOutPre(id);
        userDAO.updateOutfit(out, id);
        List<Outfit> outfit = userDAO.getOutfits(out.getUser_id());
        return outfit;
    }
    public void updateOutPre(int out_id, int pre_id) {
        userDAO.insertOutPre(out_id, pre_id);
    }

    public List<Outfit> getOutfitByUserId(String userId) {
        List<Outfit> outfit = userDAO.getOutfits(userId);
        for (int i = 0; i < outfit.size(); i++) {
            List<Integer> ids = userDAO.traerids(outfit.get(i));
            if(ids.size() != 0){
                List<String> lista_prendas = new ArrayList<>();
                for (int j = 0; j < ids.size(); j++) {
                    List<String> prendas = userDAO.traerprendas(ids.get(j));
                    lista_prendas.addAll(prendas);
                }
                outfit.get(i).setPrendas(lista_prendas);
            }
            else{
               userDAO.elimOutfit(outfit.get(i).getOut_id());
            }
        }
        return outfit;
    }

    public List<Prenda> getDonaByUserId(String userId) {
        return userDAO.getPrendasdona(userId);
    }
    public List<Prenda> getArchByUserId(String userId) {
        return userDAO.getPrendasarch(userId);
    }
    public List<Outfit> geRecoByUserId(String userId, int temp) {
        List<Outfit> recos = userDAO.getReco(userId, temp);
        for (int i = 0; i < recos.size(); i++) {
            List<Integer> ids = userDAO.traerids(recos.get(i));
            if (ids.size() != 0) {
                List<String> lista_prendas = new ArrayList<>();
                for (int j = 0; j < ids.size(); j++) {
                    List<String> prendas = userDAO.traerprendas(ids.get(j));
                    lista_prendas.addAll(prendas);
                }
                recos.get(i).setPrendas(lista_prendas);
            }
        }

        if (recos.size() > 3) {
                List<Outfit> sublist = new ArrayList<>(recos.subList(0, recos.size()));
                Collections.shuffle(sublist);
                recos = sublist.subList(0, 3);
            }
            return recos;
    }
}
