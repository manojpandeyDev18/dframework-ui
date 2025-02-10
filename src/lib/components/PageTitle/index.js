import React from "react";
import { Helmet } from "react-helmet-async";
import { withTranslation } from "react-i18next";
import { Breadcrumbs, Typography, Link as MuiLink, Button, IconButton, Grid, Card, CardContent } from "@mui/material";
import HelpIcon from '@mui/icons-material/Help';
import HelpModal from "../HelpModal";

const titleClass = "text-theme-blue text-max-width";
function PageTitle({
  title = "",
  showBreadcrumbs,
  breadcrumbs = [],
  nestedGrid = false,
  breadcrumbColor
}) {
  const breadcrumbsLasIndex = breadcrumbs.length - 1;
  const needToShowBreadcrumbs = showBreadcrumbs && breadcrumbs.length;
  const handleBack = () => {
    window.history.back(); // Navigate to the previous page when clicked
  };
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {needToShowBreadcrumbs && (<> <Card sx={{ mb: 3 }}>
        <CardContent sx={{ backgroundColor: breadcrumbColor || '#fff' }}>
          <Grid container>
            <Grid item sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
              <Breadcrumbs variant="h5" aria-label="breadcrumb" separator=">" className={`${titleClass} breadcrumbs-text-title text-max-width`}>
                {breadcrumbs.map((breadcrumb, index) => index < breadcrumbsLasIndex ? (
                  <MuiLink onClick={handleBack} key={breadcrumb.text} className={`${titleClass} breadcrumbs-text-title text-max-width`} variant="inherit" sx={{ textDecoration: 'none', color: '#1976d2' }}>
                    {breadcrumb.text}
                  </MuiLink>
                ) : <Typography key={breadcrumb.text} className={`${titleClass} breadcrumbs-text-title text-max-width`} variant="inherit">
                  {breadcrumb.text}
                </Typography>)}
              </Breadcrumbs>
            </Grid>
            {(breadcrumbs.length > 1 || nestedGrid) && <Grid item sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
              <Button variant="contained" onClick={handleBack}>Back</Button>
            </Grid>}
            <Grid item sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
              <IconButton color="primary" title='Help' size="large">
                <HelpIcon fontSize="inherit" />
              </IconButton>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
        <HelpModal />
      </>)}
    </>
  );
}

export default withTranslation()(PageTitle);
