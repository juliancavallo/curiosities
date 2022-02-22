const loadNotes = async () => {
    const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vSgWHXf4morQq85GblJiA-S4daraFMo-lgZJSjLVpoiOD7xYo0D6HnTbz8hgwHvprZJcBqK8kzSMdbc/pub?output=csv')
    const csv = await response.text();

    var lines = csv.split("\r\n");
    const section = document.querySelector('.documents');
    lines.forEach(line => {
        let a = document.createElement('a');
        a.href = `https://google.com/search?q=${line}`;
        a.target = '_blank';
        a.text = line;
        a.classList.add('document');
        section.appendChild(a);
    });
}

loadNotes();