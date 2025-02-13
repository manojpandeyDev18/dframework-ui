import React, { useState } from "react";
import clsx from "clsx";
import { Helmet } from "react-helmet-async";
import Tooltip from "@mui/material/Tooltip";
import { Box } from "@material-ui/core";
import { withTranslation } from "react-i18next";
import MuiTypography from "../Typography";
import useMobile from "../useMobile";
import helpng from "../../assets/images/question.png";
import { Breadcrumbs, Typography, Link as MuiLink, Button, IconButton, Grid } from "@mui/material";
import HelpIcon from '@mui/icons-material/Help';
import HelpModal from "../HelpModal";
import actionsStateProvider from "../useRouter/actions";
import { useStateContext } from "../useRouter/StateProvider";
import { Card, CardContent } from '@mui/material';

function PageTitle(props) {
  const {
    mediaQuery,
    titleHeading,
    name = null,
    icon: Icon,
    iconclass,
    RightComponent = null,
    mobileRightComponent,
    title = "",
    titleClass = "text-theme-blue text-max-width",
    showTitleInfo,
    showBreadcrumbs,
    breadcrumbs = [],
    enableGoBack = false,
    breadcrumbColor,
  } = props;
  const [showTooltip, setShowTooltip] = useState(false);
  const isMobile = useMobile(true);
  const { dispatchData, stateData = {} } = useStateContext();
  const { permissions = {} } = stateData.gridSettings || {}
  const gridUrl = permissions.Url;
  const showImage = false;
  const card = [
    { title: "New Features", subTitle: "", url: 'https://coolrgroup.tourial.com/5df412f2-7667-48d6-8599-ccec9a3a4192', },
    { title: "Playbook Overview", subTitle: "", url: "https://coolrgroup.tourial.com/71309683-3997-452a-8bf2-67c706f6a11f" },
    { title: "Data & Settings", subTitle: "", url: "https://coolrgroup.tourial.com/ddd14085-4dee-46e2-8d0d-0573c9304ffa", },
    { title: "Operations", subTitle: "", url: "https://coolrgroup.tourial.com/59ad4e7d-d254-4c0d-a861-6803cee53816", },
    { title: "Outlets", subTitle: "", url: "https://coolrgroup.tourial.com/546817a2-ab3b-4651-acad-c70fa1a0dddd", },
    { title: "Business Performance", subTitle: "", url: "https://coolrgroup.tourial.com/870cce3b-2642-4358-96c7-85043d2996ee", },
    { title: "Replenishment", subTitle: "", url: "https://coolrgroup.tourial.com/68625e21-69d7-47cb-9f6e-e55afbd49bbd", }
  ]

  function handleCardClick(data) {
    const obj = card.find((item) => item.title === data);
    dispatchData({
      type: actionsStateProvider.OPEN_MODAL, payload: { status: true, data: obj }
    })
  }
  const breadcrumbsLasIndex = breadcrumbs.length - 1
  const needToShowBreadcrumbs = showBreadcrumbs && breadcrumbs.length;
  const handleBack = () => {
    window.history.back(); // Navigate to the previous page when clicked
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <MuiTypography className="print-only" text={titleHeading} />
      {needToShowBreadcrumbs && (<> <Card sx={{ mb: 3 }}>
        <CardContent sx = {{ backgroundColor: breadcrumbColor || '#fff' }}>
          {/* Add BreadCrumbs  */}
          <Grid container>
            <Grid item sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
              <Breadcrumbs variant="h5" aria-label="breadcrumb" separator=">" className={`${titleClass} breadcrumbs-text-title text-max-width`}>
                {breadcrumbs.map((breadcrumb, index) => index < breadcrumbsLasIndex ? (
                  <MuiLink onClick={handleBack} key={index} className={`${titleClass} breadcrumbs-text-title text-max-width`} variant="inherit" sx={{ textDecoration: 'none', color: '#1976d2' }}>
                    {breadcrumb.text}
                  </MuiLink>
                ) : <Typography key={index} className={`${titleClass} breadcrumbs-text-title text-max-width`} variant="inherit">
                  {breadcrumb.text}
                </Typography>)}
              </Breadcrumbs>
            </Grid>
            {(breadcrumbs.length > 1 || enableGoBack) && <Grid item sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}}>
              <Button variant="contained" onClick={handleBack}>Back</Button>
            </Grid>}
            <Grid item sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
              <IconButton color="primary" title='Help' size="large">
                <HelpIcon fontSize="inherit" />
              </IconButton>
            </Grid>
          </Grid>
          {Icon && (
            <Box>
              <Icon
                iconclass={iconclass || "cameraIconTitle"}
                className={iconclass || "cameraIconTitle"}
              />
            </Box>
          )}
          {/* Title render */}
          <Box className="app-page-title--first">
            {mediaQuery ? (
              <div
                className={`app-page-title--heading-media ${isMobile ? "small-text pl-2" : ""
                  }`}
              >
                <h1
                  className={`${titleClass}  ${isMobile ? "display-4 pl-2" : ""
                    } `}
                >
                  {titleHeading}
                </h1>
              </div>
            ) : (
              <div>
                <div style={{ display: isMobile ? 'block' : "flex", alignItems: "center" }}>
                  <div style={{ flex: "1 0 auto" }}>
                    {showTitleInfo ? (
                      showTitleInfo
                    ) : (
                      <MuiTypography
                        className={`${titleClass} page-text-title`}
                        variant="p"
                        text={titleHeading}
                        name={name}
                      />
                    )}
                  </div>
                  {/* Only show the image if the title matches */}
                  {
                    showImage && (
                      <Tooltip title={"Help"} open={showTooltip} placement="right" className="tooltip-help">
                        <img
                          src={helpng}
                          alt="help"
                          style={{
                            width: "40px",
                            height: "40px",
                            marginLeft: "10px",
                            marginTop: "5px"
                          }}
                          onClick={() => { handleCardClick(titleHeading) }}
                          onMouseEnter={() => setShowTooltip(true)}
                          onMouseLeave={() => setShowTooltip(false)}
                        />
                      </Tooltip>
                    )}
                </div>
              </div>
            )}
          </Box>
          {/* For Mobile */}
          {!isMobile && (
            <>
              <Box> {RightComponent && <RightComponent />} </Box>
              <Box> {mobileRightComponent} </Box>
            </>
          )}
        </CardContent>
      </Card>
        <HelpModal /> </>)}
    </>
  );
}

export default withTranslation()(PageTitle);
