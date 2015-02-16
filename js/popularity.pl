#!/usr/bin/perl

read(STDIN, my $buffer, $ENV{'CONTENT_LENGTH'});

my @pairs = split(/&/, $buffer);
my ($name, $value) = "";
my ($sec, $min, $hour, $mday, $mon, $year, $wday, $yday, $isdst) = localtime();

foreach my $pair (@pairs)
{
  ($name, $value) = split(/=/, $pair);
  $value =~ s/%([A-Za-z0-9]{2})/chr hex $1/ge;
  $value =~ s/\+//g;
}

 open OUT, ">>./popularity.dat/" or die "Could not open popularity.dat";
   print OUT "$value at $year$mon$mday $hour:$min:$sec";
 close OUT;

 exit;
