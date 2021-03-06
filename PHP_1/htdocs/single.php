<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Rejestracja do kategorji indywidualnej</title>
    <link rel="stylesheet" href="style.css" type="text/css"/>
</head>
<body>
<?php
	$nazwisko = $imie = $emeil = $tel = $pesel = ""; 
?>
<header>
    <section id="header">
        <h1>&Alpha; &rho; &iota; &sigma; &tau; &omicron; &tau; &epsilon; &lambda; &eta; &sigmaf;-2016</h1>
        <h2>Mistrzowstwa w programowaniu Aristotelis-2016</h2>
        <article>Turniej jest organizowany przy wsparciu Polskiej Akademii Nauk od 1995 roku</article>
    </section>
    <hr>

    <section id="navigation">
        <nav>
            <h3>
                <a href="index.html">Główna</a>
                <a href="details.html">Szczegóły</a>
                <a href="registration.html">Rejestracja</a>
            </h3>
        </nav>
    </section>
    <hr>
</header>

<section id="content">
    <header>
        <h2>Rejestracja do kategorji indywidualnej</h2>
    </header>

    <form method="post" autocomplete="on">
        <p>
            <label>Nazwisko:
                <input name="nazwisko" type="text" id="nazwisko" size="30" required>
                (Nazwisko)
            </label>
        </p>
        <p>
            <label>Imię:
                <input name="imie" type="text" id="imie" size="30" autofocus>
                (Imię)
            </label>
        </p>
        <p>
            <label>Adres E-mail:
                <input name="email" type="email" id="email" size="30" required>
                (name@domain.com)
            </label>

        </p>

        <p>
            <label>Telefon:
                <input name="tel" type="tel" pattern="\d{3}-\d{3}-\d{3}">
                ###-###-###
            </label>
        </p>
        <p> Pleć
            <label>Męszczyzna
                <input name="płeć" type="radio" value="Męszczyzna" checked>
            </label>
            <label>Kobieta
                <input name="płeć" type="radio" value="Kobieta">
            </label>
        </p>
        <p>
            <label>Data urodzenia:
                <input type="number" min="1900" max="2016">(rok)
                <input type="text" placeholder="Wybierz miesiąc" list="months"/>(miesiąc)
                <datalist id="months">
                    <option value="January"></option>
                    <option value="February"></option>
                    <option value="March"></option>
                    <option value="April"></option>
                    <option value="May"></option>
                    <option value="June"></option>
                    <option value="July"></option>
                    <option value="August"></option>
                    <option value="September"></option>
                    <option value="October"></option>
                    <option value="November"></option>
                    <option value="December"></option>
                </datalist>
                <input type="number" min="1" max="31">(dzień)
            </label>
        </p>
        <p>
            <label>PESEL:
                <input name="pesel" type="text" size="11" maxlength="11" pattern="\d{11}">
                (11 cyfr)
            </label>
        </p>
        <p>
            <label>Szkoła:
                <select name="szkołą">
                    <optgroup label="Warszawa">
                        <option>1 Liceum</option>
                        <option>7 Gimnasium</option>
                        <option>Liceum im. Mickiewicza</option>
                    </optgroup>
                    <optgroup label="Wrocław">
                        <option>16 Liceum</option>
                        <option>25 Liceum</option>
                    </optgroup>
                    <option>Inna</option>
                </select>
            </label>
        </p>
        <p>
            <label>Uwagi:<br>
                <textarea name="uwagi" rows="5" cols="40" maxlength="200">Wpisz tu uwagi dotyczące ciebie.</textarea>
            </label>
        </p>

        <p>
            <a href="additional_info.html" target="_blank">Dodatkowe informacje</a>
        </p>

        <p>
            <label style="font-style: italic">
                <input name="zgoda" type="checkbox" value="Dane osobowe">
                Zgadzam się na przetwożanie i przecowywanie mojich dannych osobowych.
            </label>
        </p>

        <p>
            <label style="font-style: italic">
                <input name="zgoda" type="checkbox" value="Wiadomości">
                Wysyłąj mi wiadomości o przebiegu Mistrzowstwa Aristotelis-2016.
            </label>
        </p>
        <p>
            <input type="submit" value="Zarejestruj">
            <input type="reset" value="Wyczyść">
        </p>
    </form>

</section>
<hr>

<footer>
    <p>Masz wątpliwości? Napisz <a href="mailto:aristotelis.qna@gmail.com">tu</a>!</p>
    <p>2016 Polska Akademia Nauk © <a href="http://www.pan.pl">http://www.pan.pl</a></p>
</footer>
</body>
</html>