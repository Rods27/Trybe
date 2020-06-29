#!/bin/bash
read -p "Digite o caminho do arquivo: " caminho
if [ -e $caminho ]
then
    echo "O caminho $caminho está HABILITADO."
else
    echo "O caminho não existe!"
fi
if [ -w $caminho ]
then
    echo "Você tem permissão para editar $caminho."
else
    echo "Você NÃO foi autorizado a editar $caminho."
fi