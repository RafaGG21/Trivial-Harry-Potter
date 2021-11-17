package models.services;

import entity.nuevaspreguntas;
import models.dao.InuevasPreguntasDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

public class nuevasPreguntasServiceImpl implements  InuevasPreguntasService{

    @Autowired
    private InuevasPreguntasDAO nuevasDao;


    @Override
    @Transactional
    public nuevaspreguntas save(nuevaspreguntas pregunta) {
        return nuevasDao.save(pregunta);
    }
}
