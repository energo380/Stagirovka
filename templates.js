/* ============================================================
   ШАБЛОНЫ ДОКУМЕНТОВ
   Версия v1
   ------------------------------------------------------------
   Единственное место, где живут формулировки документов,
   ссылки на нормативные акты и программа стажировки.
   Логика приложения текст документов не содержит вообще.

   При правке текста поднимите TEMPLATE_VERSION и то же
   значение впишите в лист «Настройки» -> «Версия шаблона».
   Тогда по старым карточкам будет видно, по какой редакции
   они печатались.

   НОРМАТИВНАЯ БАЗА НА МОМЕНТ НАПИСАНИЯ (август 2026):
     - ПТЭЭП: приказ Минэнерго России от 12.08.2022 № 811,
       действуют с 07.01.2023 (заменили приказ № 6 от 13.01.2003)
     - Правила работы с персоналом: приказ Минэнерго России
       от 22.09.2020 № 796. ВНИМАНИЕ: действует до 01.03.2027,
       к этому сроку ссылки надо будет пересмотреть
     - ПОТЭУ: приказ Минтруда России от 15.12.2020 № 903н,
       срок действия продлён до 01.09.2031 приказом № 287н

   Отменённые документы, на которые ссылались прежние бумажные
   образцы и которых здесь БОЛЬШЕ НЕТ:
     - «Межотраслевые правила по охране труда (правила
       безопасности) при эксплуатации электроустановок»
     - ПТЭЭП в редакции приказа № 6 от 13.01.2003 (п. 1.4.8)
   ============================================================ */


const TEMPLATE_VERSION = 'v1';


/* ------------------------------------------------------------
   Реквизиты нормативных актов.
   Меняются здесь и сразу во всех трёх документах.
   ------------------------------------------------------------ */
const LAW = {
  pteep:
    'Правил технической эксплуатации электроустановок потребителей ' +
    'электрической энергии, утверждённых приказом Минэнерго России ' +
    'от 12 августа 2022 г. № 811',

  personnel:
    'Правил работы с персоналом в организациях электроэнергетики ' +
    'Российской Федерации, утверждённых приказом Минэнерго России ' +
    'от 22 сентября 2020 г. № 796',

  poteu:
    'Правил по охране труда при эксплуатации электроустановок, ' +
    'утверждённых приказом Минтруда России от 15 декабря 2020 г. № 903н',

  // Короткие формы для таблицы программы: полные реквизиты с датами
  // уже приведены в распоряжениях, здесь они только раздували строку
  pteepShort: 'Правила технической эксплуатации электроустановок ' +
              'потребителей электрической энергии (приказ Минэнерго ' +
              'России № 811)',

  poteuShort: 'Правила по охране труда при эксплуатации электроустановок ' +
              '(приказ Минтруда России № 903н)'
};


/* ------------------------------------------------------------
   ПРОГРАММА СТАЖИРОВКИ
   Одинаковая для всех, поэтому зашита здесь.
   Итоги по разделам и общий итог считаются сами - в бумажном
   образце сумма раздела 3 была указана как 32 при фактических 40.
   ------------------------------------------------------------ */
const PROGRAM = [
  {
    title: 'Изучение нормативной, технической и эксплуатационной документации',
    items: [
      { no: '1.1', title: LAW.pteepShort + '. ' + LAW.poteuShort, hours: 6 },
      { no: '1.2', title: 'Производственная инструкция', hours: 4 },
      { no: '1.3', title: 'Инструкция по охране труда для электромонтёра, ' +
                          'инструкции по охране труда по видам работ, ' +
                          'инструкция по оказанию первой помощи', hours: 6 },
      { no: '1.4', title: 'Инструкция по пожарной безопасности', hours: 2 },
      { no: '1.5', title: 'Производственные инструкции по эксплуатации ' +
                          'электроустановок', hours: 8 }
    ]
  },
  {
    title: 'Ориентирование на рабочем месте',
    items: [
      { no: '2.1', title: 'Изучение общей схемы электроснабжения {ORG}, ' +
                          'однолинейных схем электроснабжения вверенных ' +
                          'в эксплуатацию электроустановок объектов', hours: 16 },
      { no: '2.2', title: 'Знакомство с режимами работы обслуживаемого ' +
                          'оборудования, изучение эксплуатационных инструкций, ' +
                          'электрических схем', hours: 16 },
      { no: '2.3', title: 'Знакомство с графиками обходов, осмотра и ремонта ' +
                          'оборудования', hours: 6 },
      { no: '2.4', title: 'Ведение оперативных журналов, порядок их оформления', hours: 2 },
      { no: '2.5', title: 'Действия в аварийных ситуациях', hours: 6 }
    ]
  },
  {
    title: 'Приобретение необходимых практических навыков в выполнении ' +
           'основных производственных операций, безопасные методы и приёмы ' +
           'их выполнения',
    items: [
      { no: '3.1', title: 'Выполнение организационных и технических ' +
                          'мероприятий, обеспечивающих безопасность работ ' +
                          'в электроустановках', hours: 12 },
      { no: '3.2', title: 'Установка заземления', hours: 4 },
      { no: '3.3', title: 'Выполнение работ без снятия напряжения', hours: 8 },
      { no: '3.4', title: 'Производство работ с ручным электроинструментом', hours: 4 },
      { no: '3.5', title: 'Производство работ с лестниц, стремянок, лесов, ' +
                          'подмостей и т.п.', hours: 4 },
      { no: '3.6', title: 'Содержание, применение электрозащитных средств, ' +
                          'приспособлений и инструмента, порядок их осмотра ' +
                          'и испытаний', hours: 8 }
    ]
  }
];

const HOURS_PER_SHIFT = 8;

/** Итоги считаются, а не вписываются руками. */
const PROGRAM_HOURS = PROGRAM.reduce(function (sum, sec) {
  return sum + sec.items.reduce(function (s, it) { return s + it.hours; }, 0);
}, 0);

const PROGRAM_SHIFTS = PROGRAM_HOURS / HOURS_PER_SHIFT;   // 112 / 8 = 14


/**
 * Программа под фактическое число смен.
 *
 * Базовая программа расписана на PROGRAM_SHIFTS смен. Если стажировку
 * назначили короче, часы каждой темы уменьшаются пропорционально.
 * Остаток от деления раздаётся темам с наибольшей дробной частью,
 * поэтому сумма по таблице всегда сходится с итогом ровно.
 *
 * Без этого в акте печаталось «112 часов (14 смен)» независимо от
 * карточки, и акт противоречил распоряжению, где стояло введённое
 * число смен.
 */
function programFor(shifts) {
    const n = Number(shifts);
    const target = (!n || n < 1) ? PROGRAM_HOURS : n * HOURS_PER_SHIFT;

    // Плоский список тем с точной, ещё дробной долей часов
    const flat = [];
    PROGRAM.forEach(function (sec, si) {
        sec.items.forEach(function (it) {
            flat.push({
                si: si, no: it.no, title: it.title,
                exact: it.hours * target / PROGRAM_HOURS
            });
        });
    });

    // Целые части, но не меньше часа на тему
    let given = 0;
    flat.forEach(function (f) {
        f.hours = Math.max(1, Math.floor(f.exact));
        given += f.hours;
    });

    // Остаток - темам с самой большой дробной частью
    let left = target - given;
    const byRest = flat.slice().sort(function (a, b) {
        return (b.exact - Math.floor(b.exact)) - (a.exact - Math.floor(a.exact));
    });
    for (let i = 0; left > 0 && i < byRest.length; i++) {
        byRest[i].hours++;
        left--;
    }

    // Обратный случай: минимум в один час на тему перебрал итог.
    // Снимаем лишнее с самых объёмных тем, пока сумма не сойдётся.
    while (left < 0) {
        const donors = flat.filter(function (f) { return f.hours > 1; })
                           .sort(function (a, b) { return b.hours - a.hours; });
        if (!donors.length) break;   // стажировка короче, чем тем в программе
        donors[0].hours--;
        left++;
    }

    // Собираем обратно по разделам и считаем итог по факту,
    // чтобы «Итого» никогда не разошлось со столбцом часов
    const sections = PROGRAM.map(function (sec, si) {
        const items = flat.filter(function (f) { return f.si === si; });
        return {
            title: sec.title,
            items: items,
            hours: items.reduce(function (s, f) { return s + f.hours; }, 0)
        };
    });

    const total = sections.reduce(function (s, sec) { return s + sec.hours; }, 0);

    return {
        sections: sections,
        hours: total,
        shifts: Math.round(total / HOURS_PER_SHIFT)
    };
}


/* ------------------------------------------------------------
   ОФОРМЛЕНИЕ ПЕЧАТИ
   Нулевые поля страницы плюс собственные отступы документа -
   при таком сочетании Chrome и Edge не печатают свои
   колонтитулы с адресом и датой. В Firefox галочку
   «Печатать колонтитулы» нужно снять руками один раз.
   ------------------------------------------------------------ */
const DOC_CSS = `
@page { size: A4; margin: 0; }

/* Поля по ГОСТ Р 7.0.97: слева 20 мм, справа 10 мм, сверху и снизу 20 мм.
   Ширина и высота листа задаются ТОЛЬКО на экране. При печати страница
   уже имеет размер A4 из @page, и повторное указание width: 210mm даёт
   переполнение на доли пикселя, из-за которого появляются пустые
   страницы и обрезается низ. */
.doc {
    padding: 15mm 10mm 15mm 20mm;
    box-sizing: border-box;
    background: #fff;
    color: #000;
    font-family: 'Times New Roman', Times, serif;
    font-size: 12pt;
    line-height: 1.22;
    text-align: justify;
}

/* Акт с таблицей на 20 строк: чуть плотнее, чтобы влезал на один лист */
.doc.compact { padding: 10mm 10mm 10mm 20mm; font-size: 11pt; line-height: 1.18; }

/* Нижний отступ последнего блока выталкивает документ за край листа */
.doc > *:last-child { margin-bottom: 0; }

.doc-org      { text-align: center; font-weight: bold; margin-bottom: 10pt; }
.doc-kind     { text-align: center; font-weight: bold; font-size: 14pt;
                letter-spacing: 2px; margin-bottom: 6pt; }
.doc-line     { display: flex; justify-content: space-between; margin-bottom: 12pt; }
.doc-title    { text-align: center; font-weight: bold; margin-bottom: 12pt; }
.doc-ref      { text-align: right; font-style: italic; margin-bottom: 8pt; }
.doc-verb     { font-weight: bold; margin: 8pt 0; text-align: left; }
.doc-p        { margin-bottom: 6pt; text-indent: 1.25cm; }
.doc-p-flat   { margin-bottom: 6pt; }
.doc-person   { margin: 3pt 0 6pt 1.25cm; font-weight: bold; }
.doc-field    { margin-bottom: 7pt; }
.doc-field u  { text-decoration: none; border-bottom: 1px solid #000;
                padding: 0 4px; min-width: 60mm; display: inline-block; }

.doc-table    { width: 100%; border-collapse: collapse; margin: 8pt 0;
                font-size: 9pt; line-height: 1.2; }
.doc-table th,
.doc-table td { border: 1px solid #000; padding: 2.5pt 4pt; vertical-align: top; }
.doc-table th { text-align: center; font-weight: bold; }
.doc-table .c-no    { width: 11mm; text-align: center; }
.doc-table .c-hours { width: 14mm; text-align: center; }
.doc-table .c-sign  { width: 42mm; }
.doc-table .sec     { font-weight: bold; }
.doc-table .total   { font-weight: bold; text-align: right; }

.doc-signs    { margin-top: 14pt; }
.doc-sign     { display: flex; justify-content: space-between;
                margin-bottom: 12pt; page-break-inside: avoid; }
.doc-sign:last-child { margin-bottom: 0; }
.doc-sign .post { flex: 1 1 auto; }
.doc-sign .line { width: 45mm; border-bottom: 1px solid #000; margin: 0 8mm; }
.doc-sign .name { width: 45mm; text-align: right; }

@media screen {
    .doc {
        width: 210mm;
        min-height: 297mm;
        margin: 0 auto 20px;
        box-shadow: 0 2px 12px rgba(0,0,0,.25);
    }
}

@media print {
    .no-print { display: none !important; }

    .doc { margin: 0; box-shadow: none; }

    /* Разрыв ставится ПЕРЕД каждым следующим документом.
       Вариант "page-break-after: always" добавляет лишнюю пустую
       страницу после последнего напечатанного блока - именно из-за
       него при печати одного документа выходило два листа. */
    .doc + .doc { page-break-before: always; }

    /* Печать одного документа: остальные скрыты, а у самого документа
       разрывов быть не должно, даже если по порядку он не первый. */
    body.single .doc:not(.print-target) { display: none !important; }
    body.single .print-target { page-break-before: auto !important; }

    .doc-table tr { page-break-inside: avoid; }
    .doc-table thead { display: table-header-group; }
    .doc-signs { page-break-inside: avoid; }
}
`;


/* ------------------------------------------------------------
   Вспомогательное
   ------------------------------------------------------------ */

function tplEsc(v) {
    return String(v === null || v === undefined ? '' : v)
        .replace(/&/g, '&amp;').replace(/</g, '&lt;')
        .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

/** «20.06.2026» -> { d:'20', m:'06', y:'2026' } */
function tplDateParts(s) {
    const m = String(s || '').match(/^(\d{2})\.(\d{2})\.(\d{4})$/);
    return m ? { d: m[1], m: m[2], y: m[3] } : { d: '__', m: '__', y: '____' };
}

/** Номер документа: 5 + буква типа. */
function docNumber(card, letter) {
    return tplEsc(card['Номер']) + letter;
}

function blank(v, width) {
    const s = String(v === null || v === undefined ? '' : v).trim();
    return s ? tplEsc(s) : '<span style="display:inline-block;width:' +
           (width || 40) + 'mm;border-bottom:1px solid #000">&nbsp;</span>';
}

/* Точка в конце ставится, только если её там ещё нет.
   Иначе «Укропов А.М.» превращается в «Укропов А.М..», а
   «от 06.07.2026 г.» - в «от 06.07.2026 г..». */
function endDot(s) {
    const t = String(s === null || s === undefined ? '' : s).trim().replace(/\s+/g, ' ');
    return /[.!?]$/.test(t) ? t : t + '.';
}

/** Шапка: организация, вид документа, дата и номер. */
function docHead(org, dateStr, number, title) {
    const d = tplDateParts(dateStr);
    return '' +
      '<div class="doc-org">' + tplEsc(org) + '</div>' +
      '<div class="doc-kind">РАСПОРЯЖЕНИЕ</div>' +
      '<div class="doc-line">' +
        '<span>«&nbsp;' + d.d + '&nbsp;»&nbsp;' + d.m + '&nbsp;' + d.y + ' г.</span>' +
        '<span>№ ' + number + '</span>' +
      '</div>' +
      '<div class="doc-title">' + tplEsc(title) + '</div>';
}

/** Блок подписей. Пустые строки не печатаются. */
function docSigns(card) {
    const rows = [
        [card['Подписал должность'], card['Подписал ФИО']],
        [card['Согласовал должность']
            ? 'Согласовано: ' + card['Согласовал должность']
            : 'Согласовано', card['Согласовал ФИО']],
        ['С распоряжением ознакомлен', card['ФИО сокращённое']]
    ].filter(function (r) { return String(r[1] || '').trim(); });

    return '<div class="doc-signs">' + rows.map(function (r) {
        return '<div class="doc-sign">' +
                 '<span class="post">' + tplEsc(r[0] || '') + '</span>' +
                 '<span class="line"></span>' +
                 '<span class="name">' + tplEsc(r[1] || '') + '</span>' +
               '</div>';
    }).join('') + '</div>';
}


/* ============================================================
   1. РАСПОРЯЖЕНИЕ О СТАЖИРОВКЕ НА РАБОЧЕМ МЕСТЕ
   Основание: пункты 32 и 33 Правил № 796 - допуск к стажировке
   оформляется распорядительным документом с указанием сроков
   и ответственных, продолжительность от 2 до 14 рабочих смен.
   ============================================================ */
function renderOrderTraining(card, org) {
    const number = docNumber(card, 'С');

    return '<div class="doc" id="doc-training">' +

      docHead(org, card['Дата распоряжения о стажировке'], number,
              'О стажировке на рабочем месте') +

      '<p class="doc-p">В связи с приёмом на работу на должность, связанную ' +
        'с эксплуатацией электроустановок, и в соответствии с требованиями ' +
        'пунктов 32 и 33 ' +
        LAW.personnel + ', ' + LAW.pteep + ', а также ' + LAW.poteu + '</p>' +

      '<div class="doc-verb">ОБЯЗЫВАЮ:</div>' +

      '<p class="doc-p">1. Допустить к прохождению стажировки и обучению ' +
        'безопасным приёмам и методам труда на рабочем месте, без права ' +
        'самостоятельной работы:</p>' +
      '<div class="doc-person">' + tplEsc(card['ФИО полное']) + ', ' +
        tplEsc(card['Должность']) +
        (card['Подразделение'] ? ', ' + tplEsc(card['Подразделение']) : '') +
      '</div>' +
      '<p class="doc-p">Срок стажировки: ' + tplEsc(card['Количество смен']) +
        ' рабочих смен, с ' + tplEsc(card['Дата начала стажировки']) + ' г. по ' +
        tplEsc(card['Дата окончания стажировки']) + ' г.</p>' +

      '<p class="doc-p">2. Ответственным за проведение стажировки назначить:</p>' +
      '<div class="doc-person">' + tplEsc(card['Руководитель стажировки ФИО']) +
        ', ' + tplEsc(card['Руководитель стажировки должность']) + '</div>' +
      '<p class="doc-p">Ответственность за правильность действий обучаемого ' +
        'и соблюдение им требований правил несут как сам обучаемый, так ' +
        'и работник, проводящий стажировку.</p>' +

      '<p class="doc-p">3. В процессе стажировки работник должен усвоить ' +
        'требования отраслевых актов и инструктивно-технических документов ' +
        'в сфере электроэнергетики, инструкций по охране труда и пожарной ' +
        'безопасности, знание которых обязательно для работы в занимаемой ' +
        'должности, усвоить их практическое применение на рабочем месте, ' +
        'ознакомиться с расположением оборудования на объекте и маршрутами ' +
        'передвижения персонала, отработать ориентирование на рабочем месте, ' +
        'приобрести навыки при выполнении производственных операций, изучить ' +
        'приёмы и условия безаварийной, безопасной и экономичной эксплуатации ' +
        'обслуживаемого оборудования.</p>' +

      '<p class="doc-p">4. Контроль за исполнением настоящего распоряжения ' +
        'возложить на: ' + endDot(tplEsc(card['Контроль ФИО']) +
        (card['Контроль должность'] ? ', ' + tplEsc(card['Контроль должность']) : '')) +
      '</p>' +

      docSigns(card) +
    '</div>';
}


/* ============================================================
   2. АКТ ПРОХОЖДЕНИЯ ПРОГРАММЫ СТАЖИРОВКИ
   В шапке ссылка на распоряжение - чтобы три бумаги не
   потерялись, если их разложат по разным папкам.
   ============================================================ */
function renderAct(card, org) {
    // Программа под число смен из карточки
    const prog = programFor(card['Количество смен']);

    const rows = prog.sections.map(function (sec) {
        let html = '<tr class="sec">' +
            '<td class="c-no"></td>' +
            '<td>' + tplEsc(sec.title.replace('{ORG}', org)) + '</td>' +
            '<td class="c-hours">' + sec.hours + '</td>' +
            '<td class="c-sign"></td>' +
        '</tr>';

        html += sec.items.map(function (it) {
            return '<tr>' +
                '<td class="c-no">' + it.no + '</td>' +
                '<td>' + tplEsc(it.title.replace('{ORG}', org)) + '</td>' +
                '<td class="c-hours">' + it.hours + '</td>' +
                '<td class="c-sign"></td>' +
            '</tr>';
        }).join('');

        return html;
    }).join('');

    return '<div class="doc compact" id="doc-act">' +

      '<div class="doc-org">' + tplEsc(org) + '</div>' +
      '<div class="doc-kind">АКТ</div>' +
      '<div class="doc-title">прохождения программы стажировки на рабочем месте ' +
        tplEsc(String(card['Категория персонала'] || 'оперативно-ремонтного').trim()) +
        ' электротехнического персонала</div>' +

      '<div class="doc-ref">к распоряжению № ' + docNumber(card, 'С') +
        ' от ' + tplEsc(card['Дата распоряжения о стажировке']) + ' г.</div>' +

      '<div class="doc-field">За период с ' +
        blank(card['Дата начала стажировки'], 30) + ' по ' +
        blank(card['Дата окончания стажировки'], 30) +
        ' работник ' + blank(card['ФИО полное'], 70) + ', ' +
        blank(card['Должность'], 45) + ', ' +
        blank(card['Подразделение'], 60) +
        ', дата рождения ' + blank(card['Дата рождения'], 28) +
        ', образование ' + blank(card['Образование'], 55) +
        ' прошёл программу стажировки на рабочем месте в объёме ' +
        prog.hours + ' часов (' + prog.shifts + ' рабочих смен).</div>' +

      '<div class="doc-field">Руководитель стажировки: ' +
        blank(card['Руководитель стажировки должность'], 55) + ' ' +
        blank(card['Руководитель стажировки ФИО'], 65) + '</div>' +

      '<p class="doc-p-flat"><b>Регистрация прохождения стажировки ' +
        'на рабочем месте</b></p>' +

      '<table class="doc-table">' +
        '<thead><tr>' +
          '<th class="c-no">№ п/п</th>' +
          '<th>Тема стажировки</th>' +
          '<th class="c-hours">Часов</th>' +
          '<th class="c-sign">Подпись о прохождении и расшифровка</th>' +
        '</tr></thead>' +
        '<tbody>' + rows +
          '<tr><td colspan="2" class="total">Итого</td>' +
          '<td class="c-hours"><b>' + prog.hours + '</b></td>' +
          '<td class="c-sign"></td></tr>' +
        '</tbody>' +
      '</table>' +

      '<div class="doc-signs">' +
        '<div class="doc-sign">' +
          '<span class="post">Руководитель стажировки</span>' +
          '<span class="line"></span>' +
          '<span class="name">' + tplEsc(card['Руководитель стажировки ФИО'] || '') + '</span>' +
        '</div>' +
        '<div class="doc-sign">' +
          '<span class="post">Стажировку прошёл</span>' +
          '<span class="line"></span>' +
          '<span class="name">' + tplEsc(card['ФИО сокращённое'] || '') + '</span>' +
        '</div>' +
      '</div>' +
    '</div>';
}


/* ============================================================
   3. РАСПОРЯЖЕНИЕ О ДОПУСКЕ К САМОСТОЯТЕЛЬНОЙ РАБОТЕ
   Основание: пункты 73 и 74 Правил № 796 - первичный допуск
   после подготовки по новой должности оформляется
   распорядительным документом.
   Пункт 76: допуск действует до срока очередной проверки знаний.
   ============================================================ */
function renderOrderAdmission(card, org) {
    const number = docNumber(card, 'Д');
    const workshop = String(card['Цех закрепления'] || card['Подразделение'] || '').trim();
    const group = String(card['Группа по электробезопасности'] || '').trim();
    const category = String(card['Категория персонала'] || 'оперативно-ремонтного').trim();
    const protoNo = String(card['Протокол проверки знаний номер'] || '').trim();
    const protoDate = String(card['Протокол проверки знаний дата'] || '').trim();

    let basis = 'акт прохождения программы стажировки на рабочем месте ' +
                'к распоряжению № ' + docNumber(card, 'С') + ' от ' +
                tplEsc(card['Дата распоряжения о стажировке']) + ' г.';
    if (protoNo || protoDate) {
        basis += ', протокол проверки знаний' +
                 (protoNo ? ' № ' + tplEsc(protoNo) : '') +
                 (protoDate ? ' от ' + tplEsc(protoDate) + ' г.' : '');
    }

    return '<div class="doc" id="doc-admission">' +

      docHead(org, card['Дата распоряжения о допуске'], number,
              'О допуске к самостоятельной работе электротехнического персонала') +

      '<p class="doc-p">В соответствии с требованиями пунктов 73 и 74 ' +
        LAW.personnel + ', ' + LAW.pteep + ', а также ' + LAW.poteu + '</p>' +

      '<div class="doc-verb">РАЗРЕШАЮ:</div>' +

      '<p class="doc-p">1. Допустить к самостоятельной работе в качестве ' +
        tplEsc(category) + ' персонала с закреплением за подразделением ' +
        '«' + tplEsc(workshop) + '»:</p>' +
      '<div class="doc-person">' + tplEsc(card['ФИО полное']) + ', ' +
        tplEsc(card['Должность']) +
        (group ? ', группа по электробезопасности ' + tplEsc(group) : '') +
      '</div>' +
      '<p class="doc-p">Дата допуска: с ' + tplEsc(card['Допущен с']) + ' г.</p>' +

      '<p class="doc-p">2. Основание: ' + endDot(basis) + '</p>' +

      '<p class="doc-p">3. Допуск к самостоятельной работе действует до срока ' +
        'очередной проверки знаний. Оформление повторного допуска после ' +
        'проведения очередной проверки знаний не требуется.</p>' +

      '<p class="doc-p">4. Контроль за исполнением настоящего распоряжения ' +
        'возложить на: ' + endDot(tplEsc(card['Контроль ФИО']) +
        (card['Контроль должность'] ? ', ' + tplEsc(card['Контроль должность']) : '')) +
      '</p>' +

      docSigns(card) +
    '</div>';
}


/* ------------------------------------------------------------
   Единая точка вызова.
   ------------------------------------------------------------ */
const DOCUMENTS = {
    training:  { title: 'Распоряжение о стажировке',  render: renderOrderTraining },
    act:       { title: 'Акт стажировки',             render: renderAct },
    admission: { title: 'Распоряжение о допуске',     render: renderOrderAdmission }
};

function renderDocument(kind, card, org) {
    const d = DOCUMENTS[kind];
    if (!d) throw new Error('Неизвестный документ: ' + kind);
    return d.render(card, org || '');
}
