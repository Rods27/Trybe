#!/bin/bash
read -p "Digite o nome do arquivo:" arquivo
touch $arquivo.sh
read -p "Digite o texto do arquivo: " texto
echo $texto >> $arquivo.sh
read -p "Digite o diretorio do arquivo:" diretorio
mkdir $diretorio
mv ~/Trybe/exercicios/$arquivo.sh ~/Trybe/exercicios/$diretorio/$arquivo.sh