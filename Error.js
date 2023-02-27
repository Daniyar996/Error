import React from 'react'
import {Button, Card} from "antd";
import {Link} from 'react-router-dom';
import {useTranslation} from "react-i18next";


const Error = () => {
  const {t} = useTranslation()
  return (
    <div className="text_error">
      <Card style={{width: 600, margin: "0 auto"}}>
        <h1>
          <b>{t('Вы не зарегистрированы в системе, для получения доступа обратитесь к руководству вашей организации')}</b>
        </h1>

        <div style={{textAlign: 'center'}}>
          <Button type="primary">
            <Link to="/home">
              {t('Вернуться на главную страницу')}
            </Link>
          </Button>
        </div>
      </Card>
    </div>
  )
}

export default Error;

