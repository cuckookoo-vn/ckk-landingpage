import './support.scss';
import {useState} from "react";
import {useForm} from "react-hook-form";
import {useTranslation} from "react-i18next";
import {faCircleXmark} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {cloudS3} from "../../constant/global";

const Support = ({windowDimensions}) =>{
    const images = {
        bgForm: cloudS3 + "support/ckksite-support-bg-form.png",
        bgButton: cloudS3 + "support/ckksite-support-bg-button.png",
        iconUpload: cloudS3 + "support/ckksite-support-upload-file.png"
    }

    const [valueTextarea, setValueTextarea] = useState('');

    const [statusSize, setStatusSize] = useState(true);
    const [statusClose, setStatusClose] = useState(false);

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
            setStatusClose(false);
            event.target.style.color = "transparent";
        }else {
            event.target.style.color = "#0D0C0C";
            setStatusSize(true);
            setStatusClose(true);
        }
    }

    const closeFile = () =>{
        let inputFile = document.getElementById("support-file-upload");
        inputFile.style.color = "transparent";
        inputFile.value = null;
        setStatusClose(false);
    }

    const onSubmit = (data) => {
        alert("email đã được gửi");
    };

    const {t} = useTranslation();

    return(
        <div id="support">
            <div className="container-child">
                <span className="title-main">{t("support.titleMain")}</span>
                <span className="description">{t("support.description")}</span>
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
                               type="email"
                            {...register("email", {
                                required: true,
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "invalid email address"
                                }
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
                        />
                        <label htmlFor="support-file-upload" className="custom-file-upload">
                            <img src={images.iconUpload} alt="icon-upload"/>
                        </label>


                        <FontAwesomeIcon icon={faCircleXmark}
                                         onClick={()=> closeFile()}
                                         className={"support-close-file" + (statusClose ? " open" : "")}/>


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