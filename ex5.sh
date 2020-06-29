#!/bin/bash
read -p "Qual o caminho? " dir
if [ -f $dir ]
then   
    echo "É um arquivo comum"
elif [ -d $dir ]
then
    echo "É um diretório"
else
    echo "É outro tipo de arquivo"
fi
ls -l $dir