%% import color
C = MyColor('BrewerSet1');

%% data to be plotted
x = linspace(0, 8*pi, 300).';
y1 = sin(x);
y2 = sin(x + pi/2);
y3 = 1.5*sin(x+pi);
y4 = 1.5*sin(x+1.5*pi) -1;

%% 
% linewidth
lw = 2;

figure;
plot(x/pi, y1, 'color', C(1,:), 'linewidth', lw);
hold on
plot(x/pi, y2, '--', 'color', C(2,:), 'linewidth', lw);
plot(x/pi, y3, ':', 'color', C(3,:), 'linewidth', lw);
plot(x/pi, y4, '-o', 'color', C(4,:), 'linewidth', lw, 'MarkerIndices', 1:15:length(y4), 'MarkerSize', 8);

xlabel('$x\ (\pi)$', 'Interpreter','latex');
ylabel('$y$', 'Interpreter','latex')
xlim([0,8]);
ylim([-3,3])

legend({'$y=\sin x$', 'Line 2', 'Line 3', 'Line 4'}, 'Interpreter','latex', 'NumColumns',2)


set(gca, 'fontsize', 20)
set(gca, 'fontname', 'times new roman');
set(gca, 'linewidth', 1.5)

exportgraphics(gcf, 'Demo_Curves.pdf', 'ContentType','vector')
