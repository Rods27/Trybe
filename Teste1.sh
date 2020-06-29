#!/bin/bash
echo "Digite o nome do arquivo: "
read arquivo
touch $arquivo.txt
echo "Digite o texto do arquivo: "
read texto
echo $texto >> $arquivo.txt
echo "Digite o nome do diretorio: "
read diretorio
mkdir $diretorio
mv ~/Trybe/exercicios/$arquivo.txt ~/Trybe/exercicios/$diretorio/$arquivo.txt