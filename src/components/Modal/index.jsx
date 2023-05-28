const Modal = (props, title) => {
  return (
    <div
      className={`modal_wrapper ${props.isOpened ? "open" : "close"}`}
      style={{ ...props.style }}
    >
      <div className="modal_body">
        <div className="modal__close" onClick={props.onModalClose}>
          <img
            className="cu-p"
            src={process.env.PUBLIC_URL + "/img/btn-remove.svg"}
            alt="Close"
          />
        </div>

        <div className="product">
          <div className="top">
            <div className="left">
              <img src={props.imageUrl} alt="" />
            </div>
            <div className="right">
              <div className="brand">
                <img src={props.brandImage} alt="" />
              </div>
              <h2>{props.title}</h2>
              <div className="price">
                <h2>{`Price: ${props.price} RUB.`}</h2>
              </div>
            </div>
          </div>
          <hr />
          <div className="bottom">
            <h2>Brand INFO:</h2>
            <div class="card">
              <h3>Заводские данные</h3>
              <table>
                <tr>
                  <th>Гарантия от производителя</th>
                  <td>36 мес.</td>
                </tr>
                <tr>
                  <th>Страна-производитель</th>
                  <td>Китай</td>
                </tr>
              </table>
            </div>

            <div class="card">
              <h3>Общие параметры</h3>
              <table>
                <tr>
                  <th>Серия</th>
                  <td>Palit JetStream</td>
                </tr>
                <tr>
                  <th>Год релиза</th>
                  <td>2019</td>
                </tr>
                <tr>
                  <th>Пониженный хэшрейт (LHR)</th>
                  <td>нет</td>
                </tr>
              </table>
            </div>

            <div class="card">
              <h3>Спецификации видеопамяти</h3>
              <table>
                <tr>
                  <th>Объем видеопамяти</th>
                  <td>8 ГБ</td>
                </tr>
                <tr>
                  <th>Тип памяти</th>
                  <td>GDDR6</td>
                </tr>
                <tr>
                  <th>Пропускная способность памяти на один контакт</th>
                  <td>14 Гбит/с</td>
                </tr>
                <tr>
                  <th>Разрядность шины памяти</th>
                  <td>256 бит</td>
                </tr>
                <tr>
                  <th>Максимальная пропускная способность памяти</th>
                  <td>448 Гбайт/сек</td>
                </tr>
              </table>
            </div>

            <div class="card">
              <h3>Спецификации видеопроцессора</h3>
              <table>
                <tr>
                  <th>Микроархитектура</th>
                  <td>Turing</td>
                </tr>
                <tr>
                  <th>Кодовое название графического процессора</th>
                  <td>TU104</td>
                </tr>
                <tr>
                  <th>Техпроцесс</th>
                  <td>12 нм</td>
                </tr>
                <tr>
                  <th>Штатная частота работы видеочипа</th>
                  <td>1605 МГц</td>
                </tr>
                <tr>
                  <th>Турбочастота</th>
                  <td>1815 МГц</td>
                </tr>
                <tr>
                  <th>Шейдерные ALU</th>
                  <td>2560</td>
                </tr>
                <tr>
                  <th>Число текстурных блоков</th>
                  <td>160</td>
                </tr>
                <tr>
                  <th>Число блоков растеризации</th>
                  <td>64</td>
                </tr>
                <tr>
                  <th>Версия шейдеров</th>
                  <td>6.1</td>
                </tr>
                <tr>
                  <th>Максимальная температура процессора</th>
                  <td>88°</td>
                </tr>
                <tr>
                  <th>Поддержка трассировки лучей</th>
                  <td>да</td>
                </tr>
                <tr>
                  <th>Аппаратное ускорение трассировки лучей (RT-ядра)</th>
                  <td>40</td>
                </tr>
                <tr>
                  <th>Тензорные ядра</th>
                  <td>320</td>
                </tr>
                <tr>
                  <th>Пиковая производительность чипов в FP32</th>
                  <td>9060 GFLOPS</td>
                </tr>
              </table>
            </div>

            <div class="card">
              <h3>Вывод изображения</h3>
              <table>
                <tr>
                  <th>Видео разъемы</th>
                  <td>DisplayPort (3 шт), HDMI</td>
                </tr>
                <tr>
                  <th>Версия HDMI</th>
                  <td>2.0b</td>
                </tr>
                <tr>
                  <th>Версия DisplayPort</th>
                  <td>1.4a</td>
                </tr>
                <tr>
                  <th>Максимальное разрешение</th>
                  <td>8K UHD (Ultra HD), 7680x4320</td>
                </tr>
                <tr>
                  <th>Количество подключаемых одновременно мониторов</th>
                  <td>4</td>
                </tr>
              </table>
            </div>

            <div class="card">
              <h3>Подключение</h3>
              <table>
                <tr>
                  <th>Интерфейс подключения</th>
                  <td>PCI-E</td>
                </tr>
                <tr>
                  <th>Версия PCI Express</th>
                  <td>3.0</td>
                </tr>
                <tr>
                  <th>Поддержка мультипроцессорной конфигурации</th>
                  <td>NVLink</td>
                </tr>
              </table>
            </div>

            <div class="card">
              <h3>Питание</h3>
              <table>
                <tr>
                  <th>Необходимость дополнительного питания</th>
                  <td>есть</td>
                </tr>
                <tr>
                  <th>Разъемы дополнительного питания</th>
                  <td>8-pin x2</td>
                </tr>
                <tr>
                  <th>Максимальное энергопотребление</th>
                  <td>215 Вт</td>
                </tr>
                <tr>
                  <th>Лимит энергопотребления</th>
                  <td>300 Вт</td>
                </tr>
                <tr>
                  <th>Рекомендуемый блок питания</th>
                  <td>650 Вт</td>
                </tr>
              </table>
            </div>

            <div class="card">
              <h3>Система охлаждения</h3>
              <table>
                <tr>
                  <th>Название системы охлаждения</th>
                  <td>Palit TurboFan Blade 2.0</td>
                </tr>
                <tr>
                  <th>Тип охлаждения</th>
                  <td>активное воздушное</td>
                </tr>
                <tr>
                  <th>Тип и количество установленных вентиляторов</th>
                  <td>2 осевых</td>
                </tr>
                <tr>
                  <th>Управление скоростью вращения</th>
                  <td>до полной остановки</td>
                </tr>
              </table>
            </div>

            <div class="card">
              <h3>Габариты</h3>
              <table>
                <tr>
                  <th>Низкопрофильная карта (Low Profile)</th>
                  <td>нет</td>
                </tr>
                <tr>
                  <th>Количество занимаемых слотов расширения</th>
                  <td>2.7</td>
                </tr>
                <tr>
                  <th>Длина видеокарты</th>
                  <td>292 мм</td>
                </tr>
                <tr>
                  <th>Толщина видеокарты</th>
                  <td>59.6 мм</td>
                </tr>
              </table>
            </div>

            <div class="card">
              <h3>Дополнительно</h3>
              <table>
                <tr>
                  <th>Комплектация</th>
                  <td>документация, кабель питания</td>
                </tr>
                <tr>
                  <th>Подсветка элементов видеокарты</th>
                  <td>есть</td>
                </tr>
                <tr>
                  <th>Синхронизация RGB подсветки</th>
                  <td>нет</td>
                </tr>
                <tr>
                  <th>Переключатель BIOS</th>
                  <td>есть</td>
                </tr>
                <tr>
                  <th>LCD дисплей</th>
                  <td>нет</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
