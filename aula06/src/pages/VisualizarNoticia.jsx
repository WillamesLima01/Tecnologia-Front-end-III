import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../api'; 
import { Box, Typography, Paper } from '@mui/material';

const VisualizaNoticia = () => {
    const { id } = useParams();
    const [visualizaNoticia, setVisualizaNoticia] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/noticias/${id}`); 
                setVisualizaNoticia(response.data);
            } catch (error) {
                console.error('Erro ao buscar a notícia:', error);
            }
        };

        fetchData();
    }, [id]);

    if (!visualizaNoticia) {
        return (
            <Box sx={{ p: 4 }}>
                <Typography variant="h4">Carregando...</Typography>
            </Box>
        );
    }

    return (
        <Box sx={{ p: 4 }}>
            <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="h4" gutterBottom>{visualizaNoticia.titulo}</Typography>
                <Typography variant="h6" gutterBottom>{visualizaNoticia.subtitulo}</Typography>
                <Typography variant="body1">{visualizaNoticia.texto}</Typography>
            </Paper>
        </Box>
    );
};

export default VisualizaNoticia;
