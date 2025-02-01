import {
  Box,
  Typography,
  List,
  ListItem,
  Avatar,
  ListItemText,
  ListItemAvatar,
  Chip,
} from "@mui/material";

interface RankingItem {
  name: string;
  rank: number;
  points: number;
  avatar: string;
}

export default function RankingTeste({ items }: { items: RankingItem[] }) {
  // Funções auxiliares
  const getMedalImage = (position: number) =>
    ({
      1: "/medalhas/ouro.png",
      2: "/medalhas/prata.png",
      3: "/medalhas/bronze.png",
    }[position]);

  const getInitial = (name: string) => name.charAt(0).toUpperCase();

  const getAvatarColor = (initial: string) => {
    const charCode = initial.charCodeAt(0);
    const hue = (charCode * 137) % 360; // Gera matiz única baseada no caractere
    return `hsl(${hue}, 70%, 40%)`; // Retorna cor HSL
  };

  return (
    <Box
      sx={{
        maxWidth: 600,
        margin: "auto",
        p: 2,
        backgroundColor: "transparent",
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          mb: 4,
          color: "#fff",
        }}
      >
        🏆 Ranking de Pontuação
      </Typography>

      <List dense>
        {items.map((item, index) => (
          <div key={item.rank}>
            <ListItem
              sx={{
                mb: 1,
                display: "flex",
                alignItems: "center",
                paddingLeft: 0,
                backgroundColor: "transparent",
              }}
            >
              {/* Container Medalha/Posição */}
              <ListItemAvatar
                sx={{
                  minWidth: "80px",
                  display: "flex",
                  justifyContent: "center",
                  marginRight: "16px",
                }}
              >
                {item.rank <= 3 ? (
                  <img
                    src={getMedalImage(item.rank)}
                    alt={`Medalha ${item.rank}`}
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "contain",
                    }}
                  />
                ) : (
                  <Typography
                    variant="body1"
                    sx={{
                      width: "50px",
                      height: "50px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                      fontSize: "1.2rem",
                      color:
                        item.rank >= 4 && item.rank <= 10
                          ? "rgb(2, 41, 200)"
                          : "#fff",
                      textShadow:
                        item.rank > 10 ? "0 0 2px rgba(0,0,0,0.5)" : "none",
                    }}
                  >
                    {item.rank}
                  </Typography>
                )}
              </ListItemAvatar>

              {/* Avatar com Cor Dinâmica */}
              <ListItemAvatar sx={{ minWidth: "60px" }}>
                <Avatar
                  sx={{
                    width: 50,
                    height: 50,
                    boxShadow: 2,
                    border: "2px solid rgba(255,255,255,0.1)",
                    backgroundColor: getAvatarColor(getInitial(item.name)),
                    fontSize: "1.5rem",
                    color: "#fff",
                    textShadow: "0 1px 2px rgba(0,0,0,0.3)",
                  }}
                >
                  {getInitial(item.name)}
                </Avatar>
              </ListItemAvatar>

              {/* Nome e Pontos */}
              <ListItemText
                primary={
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      flexGrow: 1,
                      ml: 2,
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: 600,
                        color: "#fff",
                      }}
                    >
                      {item.name}
                    </Typography>

                    <Chip
                      label={`${item.points.toLocaleString()} pts`}
                      sx={{
                        fontWeight: "bold",
                        minWidth: 100,
                        backgroundColor: "transparent",
                        color: "#fff",
                        border: "transparent",
                      }}
                    />
                  </Box>
                }
              />
            </ListItem>

            {/* Zona de Conduta */}
            {index === 9 && (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  my: 3,
                  py: 2,
                  backgroundColor: "transparent",
                  borderRadius: 2,
                }}
              >
                <img
                  src="/conduta.png"
                  alt="Ícone de Conduta"
                  style={{ width: 40, height: 40, marginRight: 16 }}
                />

                <Typography
                  variant="h6"
                  sx={{
                    color: "#fff",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  }}
                >
                  Zona de Conduta
                </Typography>

                <img
                  src="/conduta.png"
                  alt="Ícone de Conduta"
                  style={{ width: 40, height: 40, marginLeft: 16 }}
                />
              </Box>
            )}
          </div>
        ))}
      </List>
    </Box>
  );
}
