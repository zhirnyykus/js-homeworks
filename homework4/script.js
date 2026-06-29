document.writeln("<table border='1';'>");

for (let i = 1; i <= 10; i++) {
    document.writeln("<tr>");
    
    for (let j = 1; j <= 10; j++) {
        let num = i * j;
        
        if ((i + j) % 2 === 0) {
            document.writeln("<td style='background-color: red; text-align: center;'>" + num + "</td>");
        } else {
            document.writeln("<td style='background-color: yellow; text-align: center;'>" + num + "</td>");
        }
    }
    
    document.writeln("</tr>");
}

document.writeln("</table>");