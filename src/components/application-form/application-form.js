import './application-form.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleXmark, faXmark} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {useTranslation} from "react-i18next";
import {cloudS3} from "../../constant/global";

const ApplicationForm = ({setOpenPopup,valueSelect,jobs}) =>{

    const {t} = useTranslation();

    const [valueTextarea, setValueTextarea] = useState('');

    const [statusSize, setStatusSize] = useState(true);

    const [statusClose, setStatusClose] = useState(false);

    const [statusNotification, setStatusNotification] = useState(false);

    const lengthTextarea = 350;

    const images = {
        bgForm: cloudS3 + "support/ckksite-support-bg-form.png",
        bgButton: cloudS3 + "support/ckksite-support-bg-button.png",
        iconUpload: cloudS3 + "support/ckksite-support-upload-file.png"
    }


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
            event.target.style.color = "#FFFFFF";
            setStatusSize(true);
            setStatusClose(true);
        }
    }

    const onSubmit = (data) => {
        setStatusNotification(true);
    };

    const closePopup = () =>{
        setStatusNotification(false);
        setOpenPopup(false);
    }

    const closeFile = () =>{
        let inputFile = document.getElementById("support-file-upload");
        inputFile.style.color = "transparent";
        inputFile.value = null;
        setStatusClose(false);
    }
    return(
        <div className="career-information">

            {
                statusNotification ?
                    <div className="career-information-notification">
                        <FontAwesomeIcon icon={faXmark}
                                         onClick={()=>closePopup()}
                                         className="close-application"/>

                        <span className="title-notification">{t("careers.notification")}</span>
                    </div>
                    :
                    <div className="career-information-box">
                        <FontAwesomeIcon icon={faXmark}
                                         onClick={()=>closePopup()}
                                         className="close-application"/>

                        <div className="career-information-header">
                            <span className="title-application">{t("careers.formCareers.titleMain")}</span>
                        </div>

                        <form className="application-form"
                              onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-input">
                            <span className="title-input">
                                {t("careers.formCareers.position")}
                                <span>*</span>:
                            </span>
                                <select className="input-form" defaultValue={valueSelect}>
                                    {
                                        jobs.map((element, index) =>
                                            <option key={index} value={element.key}>{element.title}</option>
                                        )
                                    }
                                </select>
                            </div>

                            <div className="form-input">
                        <span className="title-input">
                            {t("careers.formCareers.file")}<span>*</span>{t("careers.formCareers.file1")}
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
                            {t("careers.formCareers.message")}
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
            }

        </div>
    )
}

export default ApplicationForm;