import { ApplicationMuiTheme } from 'Lib/themes/muiTheme';

export const muiStyles = (theme: ApplicationMuiTheme) => ({
    paperWidthXl: {
        width: '80rem',
        height: '30rem',
    },
    mainContainer: {
        backgroundColor: 'white',
        padding: '1.25rem'
    },
    scheduleTitle: {
        paddingLeft: '1.25rem',
        fontWeight: 'bold' as const,
        fontSize: '0.875rem',
        color: '#757575',
        whiteSpace: 'nowrap' as const,
    },
    requestTitle: {
        textAlign: 'center' as const,
        fontWeight: 'bold' as const,
        fontSize: '0.875rem',
        color: '#4A4C50',
        backgroundColor: '#FCF9E1',
        padding: '9px 0',
    },
    cancelReasonTitle: {
        textAlign: 'center' as const,
        fontWeight: 'bold' as const,
        whiteSpace: 'nowrap' as const,
        fontSize: '0.875rem',
        color: '#4A4C50',
        backgroundColor:'#E9E9E9',
        paddingTop: '9px',
    },
    cancelReasonDesc: {
        textAlign: 'center' as const,
        whiteSpace: 'nowrap' as const,
        fontSize: '0.875rem',
        color: '#4A4C50',
        backgroundColor:'#E9E9E9',
        paddingBottom: '9px',
    },
    titleSection: {
        paddingBottom: '1rem',
        paddingTop: '0.2rem',
        alignItems: 'center' as const,
    },
    labelContainer: {
        alignItems: 'center' as const,
    },
    closeButtonContainer: {
        height: '2.82rem',
    },
    scActiveAgreedStatus: {
        borderWidth: '2px',
        padding: '0.25rem 1.125rem',
        border: '1px solid #5AAC01',
        color: '#4A4C50',
    },
    scRestStatus: {
        borderColor: '#EDCB26'
    },
    xButton: {
        paddingTop: '7px',
        paddingRight: '10px',
    },
    cancelButton: {
        width: '125px',
        padding: '0.94rem 0.75rem',
        fontSize: '13px',
        height: '36px',
        marginRight: '1.5rem',
        color: '#3C4F70',
        backgroundColor: '#FFFFFF',
        '&:hover': {
            backgroundColor: theme?.app?.applicationColors.enumColors.greyLighter
            || '#CFCFCF',
        },
        border: `1px solid ${theme?.app?.applicationColors.enumColors.greyLighter
            || '#CFCFCF'}`,
        borderRadius: '26px',
    },
    approveButton: {
        width: '125px',
        padding: '0.94rem 0.75rem',
        fontSize: '13px',
        height: '25px',
        marginRight: '1.5rem',
        backgroundColor: '#5AAC01',
        '&:hover': {
            backgroundColor: '#A5D673',
        },
    },
    scheduleButton: {
        width: '180px',
        padding: '0.94rem 0.75rem',
        fontSize: '13px',
        height: '25px',
        marginRight: '1rem',
        backgroundColor: '#5AAC01',
        '&:hover': {
            backgroundColor: '#A5D673',
        },
    },
    declineButton: {
        width: '125px',
        padding: '0.94rem 0.75rem',
        fontSize: '13px',
        height: '25px',
        marginRight: '1rem',
        backgroundColor: '#EA3323',
        '&:hover': {
            backgroundColor: '#E75F59',
        },
    },
    reportButton: {
        width: '156px',
        padding: '0.94rem 0.75rem',
        fontSize: '13px',
        height: '25px',
        marginRight: '1rem',
        backgroundColor: '#375073',
        '&:hover': {
            backgroundColor: '#bec4cf',
        },
    },
    tabViews: {
        padding: '0rem 1.25rem',
        backgroundColor: '#fff',
        flexBasis: 'auto',
    },
    tabsContainer: {
        justifyContent: 'center',
        height: '2.82rem',
        padding: '0.32rem 0rem',
        backgroundColor: '#f2f2f2',
    },
    tabIndicator: {
        top: '0',
        height: '0.19rem',
        background: theme?.app?.clientTheme.colors.buttons.primaryColorLight
            || '#009BDF',
    },
    threeTabRoot: {
        height: '100%',
        minHeight: '0px',
        width: '80%'
    },
    twoTabRoot: {
        height: '100%',
        minHeight: '0px',
        width: '55%'
    },
    oneTabRoot: {
        height: '100%',
        minHeight: '0px',
        width: '30%'
    },
    tabHeight: {
        height: '100%',
        minHeight: '0rem',
        width: '100%',
        '& button': { minWidth: '120px' }
    },
    tabsContent: {
        height: '18rem',
    },
});