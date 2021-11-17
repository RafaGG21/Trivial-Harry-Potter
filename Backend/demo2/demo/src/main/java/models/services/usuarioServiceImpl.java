/*
package models.services;

import entity.usuario;
import models.dao.IusuarioDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

public class usuarioServiceImpl implements IusuarioService{

    @Autowired
    IusuarioDAO usuarioDao;

    @Override
    public com.example.demo.usuario save(com.example.demo.usuario user) {
        return null;
    }

    @Override
    @Transactional(readOnly=true)
    public usuario save(usuario user) {
        return usuarioDao.save(user);
    }
}
*/