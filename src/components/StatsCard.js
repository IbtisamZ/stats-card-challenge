import { Box, Typography } from '@mui/material';
import { image } from '../assets/images';

const StatsCard = () => {
  const stats = [
    {
      number: '10k+',
      title: 'COMPANIES',
    },
    {
      number: '314',
      title: 'TEMPLATES',
    },
    {
      number: '12M+',
      title: 'QUERIES',
    },
  ];

  return (

      <Box sx={{ mx: 3 }}>
          <Box sx={{
            display: 'flex',
            flexDirection: {
              xs: 'column',
              md: 'row',
            },
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
          >
              <Box sx={{
                width: 1,
                maxWidth: 569,
                height: {
                  xs: 'fit-content',
                  md: 446,
                },
                borderRadius: {
                  xs: '0px 0px 10px 10px',
                  md: '10px 0px 0px 10px',
                },
                backgroundColor: 'common.darkDesaturatedBlue',
              }}
              >
                  <Box sx={{
                    py: { xs: 5, sm: 10 },
                    pl: { xs: 3, sm: 8 },
                    pr: {
                      xs: 3,
                      md: 7,
                      lg: 14,
                    },
                  }}
                  >
                      <Box sx={{
                        textAlign: {
                          xs: 'center',
                          sm: 'start',
                        },
                      }}
                      >
                          <Typography
                              color="primary.main"
                              sx={{
                                fontSize: { xs: 30, sm: 32 },
                                fontWeight: 700,
                                fontFamily: 'Inter',
                                width: { md: 360 },
                              }}
                          >
                              Get
                              {' '}
                              <span style={{ color: 'hsl(277, 64%, 61%)' }}>insights</span>
                              {' '}
                              that help your buisness grow.
                          </Typography>
                          <Typography
                              color="common.slightlyTransparentWhite"
                              sx={{
                                fontFamily: 'Inter',
                                fontSize: 15,
                                mt: 3,
                                pr: { xs: 0, md: 5 },
                                px: { xs: 3, sm: 0 },
                              }}
                          >
                              Discover the benefits of data analytics and make
                              better decisions regardina revenue customer
                              experience and overall effeciency.
                          </Typography>
                      </Box>
                      <Box
                          mt={6}
                          sx={{
                            display: 'flex',
                            flexDirection: {
                              xs: 'column',
                              sm: 'row',
                            },
                          }}
                      >
                          {stats.map(({ number, title }) => (
                              <Box
                                  key={title}
                                  sx={{
                                    mr: { xs: 1, sm: 4, md: 8 },
                                    mb: { xs: 3, sm: 0 },
                                    textAlign: {
                                      xs: 'center',
                                      sm: 'start',
                                    },
                                  }}
                              >
                                  <Typography
                                      color="primary.main"
                                      sx={{
                                        fontWeight: 600,
                                        fontSize: 24,
                                      }}
                                  >
                                      {number}
                                  </Typography>
                                  <Typography
                                      color="common.slightlyTransparentWhite2"
                                      sx={{
                                        fontSize: 12,
                                        fontFamily: 'Lexend Deca',
                                      }}
                                  >
                                      {title}
                                  </Typography>
                              </Box>
                          ))}
                      </Box>
                  </Box>
              </Box>
              <Box sx={{
                width: 1,
                maxWidth: 569,
                order: { xs: -1, md: 0 },
                borderRadius: {
                  xs: '10px 10px 0px 0px',
                  md: '0px 10px 10px 0px',
                },
                height: { xs: 240, md: 446 },
                alignSelf: 'center',
                position: 'relative',
                backgroundSize: 'cover',
                backgroundPosition: '50% 50%',
                backgroundImage: `url(${image})`,
              }}
              >
                  <Box sx={{
                    position: 'absolute',
                    borderRadius: {
                      xs: '10px 10px 0px 0px',
                      md: '0px 10px 10px 0px',
                    },
                    height: { xs: 240, md: '100%' },
                    width: '100%',
                    backgroundColor: 'common.overlayViolet',
                  }}
                  />
              </Box>
          </Box>
      </Box>
  );
};

export default StatsCard;
