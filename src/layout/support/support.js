import './support.scss';
import {useState} from "react";
import {useForm} from "react-hook-form";
import {useTranslation} from "react-i18next";

const Support = ({windowDimensions}) =>{
    const images = {
        bgForm: "https://ckksite.s3.ap-northeast-2.amazonaws.com/support/ckksite-support-bg-form.png",
        bgButton: "https://ckksite.s3.ap-northeast-2.amazonaws.com/support/ckksite-support-bg-button.png",
        iconUpload: "https://ckksite.s3.ap-northeast-2.amazonaws.com/support/ckksite-support-upload-file.png"
    }

    const [valueTextarea, setValueTextarea] = useState('');

    const [statusSize, setStatusSize] = useState(true);

    const lengthTextarea = 350;

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const changeValueTextarea = (e) =>{
        setValueTextarea(e.target.value);
    }

    const changeFile = (event) =>{
        if(event.target.files[0].size/1024/1024 > 25){
            event.target.value = null;
            setStatusSize(false);
            event.target.style.color = "transparent";
        }else {
            event.target.style.color = "#0D0C0C";
            setStatusSize(true);
        }
    }

    const onSubmit = (data) => {
        alert("email đã được gửi");
    };

    const {t} = useTranslation();

    return(
        <div id="support">
            <div className="container-child">
                <span className="title-main">{t("support.titleMain")}</span>
                <form className="contract-form"
                      style={{backgroundImage:`url(${images.bgForm})`}}
                      data-aos-anchor-placement="bottom-bottom"
                      onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-input">
                        <span className="title-input">
                            {t("support.email.titleEmail")}
                            <span>*</span>:
                        </span>
                        <input className="input-form"
                            {...register("email", {
                                required: true,
                            })}
                        />
                        {errors?.email?.type === "required" &&
                            <p className="text-error">{t("support.email.required")}</p>
                        }
                    </div>

                    <div className="form-input">
                        <span className="title-input">
                            {t("support.file.titleFile")}
                        </span>
                        <input id="support-file-upload"
                               onInput={(event)=>changeFile(event)}
                               className="input-form"
                               type="file"
                            {...register("file", {
                                required: true,
                            })}
                        />
                        <label htmlFor="support-file-upload" className="custom-file-upload">
                            <img src={images.iconUpload} alt="icon-upload"/>
                        </label>
                        {
                            statusSize === false ?
                            <p className="text-error">{t("support.file.maxSize")}</p> :
                                (
                                    errors?.file?.type === "required" &&
                                    <p className="text-error">{t("support.file.required")}</p>

                                )
                        }
                    </div>

                    <div className="form-input">
                        <span className="title-input">
                            {t("support.message.titleMessage")}
                            <span>*</span>:
                        </span>

                        <textarea className="input-form"
                            maxLength={lengthTextarea}
                            {...register("message", {
                                onChange:(e)=>changeValueTextarea(e),
                                required: true,
                                maxLength: 350
                            })}/>
                        {errors?.message?.type === "required" &&
                            <p className="text-error">{t("support.message.required")}</p>
                        }
                        {errors?.message?.type === "maxLength" || valueTextarea.length > lengthTextarea ?
                            <p className="text-error">{t("support.message.maxLength")}</p>:
                            null
                        }

                        <span className="count-text">{valueTextarea.length}/{lengthTextarea}</span>
                    </div>

                    <button type="submit"
                            onClick={()=>setStatusSize(true)}
                            style={{backgroundImage:`url(${images.bgButton})`}}
                            className="button-submit">
                        {t("support.buttonTitle")}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Support;