const messagesDB = [
    {
        'theme': 'Долгое ожидание при дозвоне в колл-центр',
        'date': '27.09.2021',
        'answer': 'На работу приняты дополнительные сотрудники колл-центра',
    },
    {
        'theme': 'Невозможность записаться на ЭКГ через колл-центр, только по направлению врача',
        'date': '16.12.2021',
        'answer': 'ЭКГ- это диагностический вид исследования электрической активности сердца. Показания для данного исследования определяет лечащий врач. Для записи на ЭКГ необходимо иметь заключение (направление) врача.',
    },
    {
        'theme': 'Невозможно записаться к врачу через ЕСИА',
        'date': '18.01.2022	',
        'answer': 'При записи ко врачу через портал Госулуг проверяется прикрепление пациента, в случае отсутствия поликлиники в списке доступных учреждений необходимо обратиться в поликлинику для прикрепления. При вызове врача на дом через портал Госуслуг проверяется прикрепление пациента. Если адрес, по которому вызывается пациент, отсутствует в списке обслуживаемых поликлиникой адресов — вызов не возможен. При записи на прием к врачу через региональных портал «Полармед» проверяется наличие пациента в медицинской информационной системе поликлиники, в случае отсутствия пациента в базе необходимо обратиться в поликлинику. Так же необходимо обратить внимание, что по умолчанию подставляются данные гражданина, авторизованного через ЕСИА, их необходимо заменить на данные ребенка.',
    },
    {
        'theme': 'На сайте и в оповещении колл-центра расходятся данные о времени работы приема вызовов на дом через сайт поликлиники',
        'date': '26.01.2022',
        'answer': 'Информация о вызове врача актуализирована. Вызов врача через форму на сайте доступен в будние дни с 08.00 до 12.00.',
    },
    {
        'theme': 'Не удается записаться к врачу-неврологу',
        'date': '26.01.2022',
        'answer': 'Запись на прием к врачам специалистам в поликлинике осуществляется врачом педиатром участковым на рабочем месте в электронной информационной системе. При отсутствии технической возможности на момент обращения, работает система записи в «лист ожидания». Неотложная медицинская помощь детям с острыми заболеваниями и состояниями оказывается врачами поликлиники при первичном обращении без записи. На сайте учреждения detpo.ru, в разделе «Документы» размещен «Порядок записи на прием к врачу», с указанием количества ежедневно выделенных талонов для записи посредством через сеть Интернет к врачам педиатрам и врачам специалистам. Информация о наличии талонов в ежедневном режиме размещена на электронном табло, расположено у регистратур в зданиях по адресам: улица Полярные зори, д.36 и улица Папанина, д.1.',
    },
    {
        'theme': 'Отказ в проведении врачебной комиссии',
        'date': '14.03.2022',
        'answer': 'В соответствии с приказом министерства здравоохранения Российской Федерации № 514н от 10 августа 2017 года «О порядке проведения профилактических медицинских осмотров несовершеннолетних» дети, достигшие возраста 1 года, подлежат осмотру педиатра, невролога, хирурга, окулиста, травматолога, проведение ЭКГ, ОАК, ОАМ. Для комиссионного осмотра участковой службой приглашаются дети в возрасте с 1 года до 1 года 3 месяцев. В связи с эпидемиологической неблагополучной ситуацией по новой коронавирусной инфекции проф. осмотры были приостановлены. Возобновлены с 25.03.2022 г. в связи приказом Министерства здравоохранения Мурманской области.',
    },
]