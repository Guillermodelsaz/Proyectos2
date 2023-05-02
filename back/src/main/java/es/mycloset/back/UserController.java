package es.mycloset.back;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/users")
    public List<User> getUsers() {
        return userService.getUsers();
    }

    @GetMapping("/prendas/{userId}")
    public List<Prenda> getPrendaByUserId(@PathVariable String userId) {
        return userService.getPrendaByUserId(userId);}

    @GetMapping("/dona/{userId}")
    public List<Prenda> getDonaByUserId(@PathVariable String userId) {
        return userService.getDonaByUserId(userId);}

    @GetMapping("/arch/{userId}")
    public List<Prenda> getArchByUserId(@PathVariable String userId) {
        return userService.getArchByUserId(userId);}

    @GetMapping("/reco/{user_id}/{temp}")
    public List<Outfit> getReco(@PathVariable("user_id") String user_id, @PathVariable int temp ) {
        return userService.geRecoByUserId(user_id, temp);
    }

    @GetMapping("/outfit/{userId}")
    public List<Outfit> getOutfitByUserId(@PathVariable String userId) {
        return userService.getOutfitByUserId(userId);}


    @PutMapping("/archivo/{id}")
    public List<Prenda> ArchivarPrenda(@PathVariable("id") int id, @RequestBody Prenda archPrenda) {
        id = archPrenda.getPre_id();
        return userService.archivo(id, archPrenda);
    }

    @PutMapping("/donacion/{id}")
    public List<Prenda> DonarPrenda(@PathVariable("id") int id, @RequestBody Prenda donPrenda) {
        id = donPrenda.getPre_id();
        return userService.donar(id, donPrenda);
    }

    @PutMapping("/desmarcar/{id}")
    public List<Prenda> DesmarcarPrenda(@PathVariable("id") int id, @RequestBody Prenda desPrenda) {
        id = desPrenda.getPre_id();
        return userService.desmarcar(id, desPrenda);
    }

    @PostMapping("/users")
    public ResponseEntity<String> handleUserPost(@RequestBody User userPost) {

        return userService.handleUserPost(userPost);
    }

    @PostMapping("/usersp")
    public ResponseEntity<String> insUserPost(@RequestBody User userPost) {
        return userService.insertUserPost(userPost);
    }
    @PutMapping("/updt_prenda/{id}")
    public List<Prenda> updatePrenda(@PathVariable("id") int id, @RequestBody Prenda prenda) {
        return userService.updatePrenda(id, prenda);
    }

    @PutMapping("/nueva_prenda/{id}")
    public List<Prenda> añadirPrenda(@PathVariable("id") int id, @RequestBody Prenda prenda) {
        return userService.añadirPrenda(prenda);
    }
    @PutMapping("/nuevo_outfit/{id}")
    public Outfit añadirOutfit(@PathVariable("id") int id, @RequestBody Outfit outfit) {
        return userService.añadirOutfit(id, outfit);
    }

    @PutMapping("/elim_prenda/{id}")
    public List<Prenda> eliminarPrenda(@PathVariable("id") int id, @RequestBody Prenda elimPrenda) {
        id = elimPrenda.getPre_id();
        return userService.eliminarPrenda(id, elimPrenda);
    }

    @PutMapping("/elim_outfit/{id}")
    public List<Outfit> eliminarOutfit(@PathVariable("id") int id, @RequestBody Outfit elimOutfit) {
        id = elimOutfit.getOut_id();
        return userService.eliminarOutfit(id, elimOutfit);
    }

    @PutMapping("/updt_outfit/{id}")
    public List<Outfit> updateOutfit(@PathVariable("id") int id, @RequestBody Outfit out) {
        return userService.updateOut(id, out);

    }

    @PutMapping("/updt_outpre/{out_id}/{pre_id}")
    public void updateOutPre(@PathVariable("out_id") int out_id, @PathVariable int pre_id ) {
        userService.updateOutPre(out_id, pre_id);
    }



}



