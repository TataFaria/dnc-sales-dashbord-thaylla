// É COLOCADO O D NOME DO ARQUIVO PARA QUE O VSCODE ENTENDA QUE ESSE ARQUIVO SERÁ SÓ DE TIPAGEM E NÃO TEM NENHUMA FUNÇÃO //

export interface Theme {
    appBackground: string
    appColor: string
    appDefaultStroke: string
    appLogo: string
    appSkeletonFrom: string
    appSkeletonTo: string
    buttons:{
        alert: string
        alertColor: string
        alertHover: string
        disabled: string
        disabledColor: string
        primary: string
        primaryColor: string
        primaryHover: string
    }
    card:{
        alert: string
        background: string
        border: string
        success: string
        warning: string
    }
    textInput:{
        active: string
        activeColor: string
        borderColor: string
        disabled: string
        disabledBorderColor: string
        disabledColor: string
        placeholderColor: string
    }
    typegraphies:{
        error: string
        subtitle: string
        success: string
    }
}