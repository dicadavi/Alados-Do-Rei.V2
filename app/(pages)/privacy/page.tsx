import React from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const PrivacyPolicyPage = () => {
    return (
        <Container maxWidth="md">
            <Typography variant="h4" gutterBottom>
                Política de Privacidade
            </Typography>
            <Typography variant="body1" paragraph>
                Esta Política de Privacidade descreve como as informações pessoais são
                coletadas, usadas e compartilhadas quando você usa nosso aplicativo.
            </Typography>
            <Typography variant="h5" gutterBottom>
                Informações que Coletamos
            </Typography>
            <Typography variant="body1" paragraph>
                Ao usar nosso aplicativo, podemos coletar as seguintes informações:
            </Typography>
            <List>
                <ListItem>
                    <ListItemText primary="Informações fornecidas pelo usuário" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Informações de uso" />
                </ListItem>
            </List>
            <Typography variant="h5" gutterBottom>
                Como Usamos Suas Informações
            </Typography>
            <Typography variant="body1" paragraph>
                Usamos as informações coletadas para:
            </Typography>
            <List>
                <ListItem>
                    <ListItemText primary="Fornecer e manter nosso aplicativo" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Personalizar sua experiência" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Enviar-lhe atualizações e comunicações relacionadas ao aplicativo" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Detectar, prevenir e lidar com fraudes e outras atividades ilegais" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Cumprir com obrigações legais" />
                </ListItem>
            </List>
            <Typography variant="h5" gutterBottom>
                Compartilhamento de Informações
            </Typography>
            <Typography variant="body1" paragraph>
                Podemos compartilhar suas informações pessoais com terceiros em
                circunstâncias limitadas.
            </Typography>
            <Typography variant="h5" gutterBottom>
                Segurança das Informações
            </Typography>
            <Typography variant="body1" paragraph>
                Tomamos medidas razoáveis para proteger as informações pessoais que
                coletamos e armazenamos.
            </Typography>
            <Typography variant="h5" gutterBottom>
                Seus Direitos
            </Typography>
            <Typography variant="body1" paragraph>
                Você tem o direito de acessar, corrigir ou excluir suas informações
                pessoais. Se desejar exercer esses direitos, entre em contato conosco.
            </Typography>
            <Typography variant="h5" gutterBottom>
                Alterações nesta Política de Privacidade
            </Typography>
            <Typography variant="body1" paragraph>
                Podemos atualizar esta Política de Privacidade de tempos em tempos.
                Recomendamos revisar periodicamente esta página para ficar informado
                sobre quaisquer mudanças.
            </Typography>
            <Typography variant="h5" gutterBottom>
                Contato
            </Typography>
            <Typography variant="body1" paragraph>
                Se você tiver dúvidas ou preocupações sobre nossa Política de
                Privacidade, entre em contato conosco em [inserir endereço de e-mail de
                contato].
            </Typography>
        </Container>
    );
};

export default PrivacyPolicyPage;
